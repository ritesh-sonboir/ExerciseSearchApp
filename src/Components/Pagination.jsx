import React from 'react'

function Pagination({totalExercises,exercisePerPage,setCurrentPage,currentPage}) {
    const pages = [];
   
    for (let index = 1; index < totalExercises/exercisePerPage; index++) {
     pages.push(index)
    }
 
   return (
     <div className='flex gap-2 flex-wrap justify-center items-center w-[1000px]'>
         {
             pages.map((page,index)=>(
                 <button 
                 key={index}
                 onClick={(e)=>{
                    setCurrentPage(page)
                    window.scrollTo({top:1800,behavior:"smooth"})
                }}
                 className={`bg-black text-white text-xl min-w-10 hover:text-black py-[2px] px-2 hover:bg-yellow-200 ${(currentPage===page)?'bg-yellow-500':''}` } >
                     {page}
                 </button>
             ))
         }
     </div>
   )
}

export default Pagination