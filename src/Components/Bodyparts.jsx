import React from 'react'


             
function Bodyparts({item,bodyPart,setBodyPart}) {

  return (
    <div className='flex items-center justify-center py-4 px-3'>
        <button className={`text-xl py-3 px-10 rounded-3xl border-none ${(item===bodyPart)?'bg-pink-600 text-white border-none outline-none':''}`}
        onClick={()=>{setBodyPart(item)}}>
          {item}
        </button>
    </div>
  )
}

export default Bodyparts