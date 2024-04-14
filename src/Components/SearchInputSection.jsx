import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, fetchDatabodypart } from '../utils/fetchData'
import HorizantalScrollBar from './HorizantalScrollBar'

//const ApiKey = import.meta.env.VITE_REPID_API_KEY
function SearchInputSection({setExercises,bodyPart,setBodyPart}) {

     const [search,setSearch] =  useState('')
     const [bodyPartData,setBodyPartData] = useState([])

     useEffect(()=>{
      const fetchExerciseData = async () =>{
        const bodyPartData = await fetchDatabodypart('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
       setBodyPartData(['all',...bodyPartData])
      }
     fetchExerciseData()
     },[])



     const handleSearch = async() =>{
      const exercisesData = await fetchData(exerciseOptions).then((data)=>{
        console.log('search exercises: ',data)
        return data
      }).catch((err)=>{
        console.log('input err',err)
      })
     
      

      //filtering data
      
      const searchExerciseData = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
         || exercise.target.toLowerCase().includes(search)
         || exercise.bodyPart.toLowerCase().includes(search)
         || exercise.equipment.toLowerCase().includes(search) 
         || exercise.instructions.toString().toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchExerciseData);

     } 

  return (
  <>
    <div className='flex flex-col px-5 items-center py-28 bg-pink-100'>
        <div>
           <h1
              className="mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl text-center"
            >
               Awesome Exercises For You
          </h1>
        </div>
<div>
    <div className="flex relative w-full h-10 items-center gap-6 py-16 flex-col md:flex-row">
      <input 
        type="text" 
        placeholder='Search exercises here..'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        className=' py-3 px-3 border-none lg:w-[500px] rounded focus:outline-none'
      />
     <button
        className="flex items-center rounded-xl px-8 py-3 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 hover:text-gray-200"
        onClick={handleSearch}
      >
         Search
      </button>
  </div>
</div>  
<HorizantalScrollBar data = {bodyPartData} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
</div>
<div>
  
</div>

</>
  )
}

export default SearchInputSection