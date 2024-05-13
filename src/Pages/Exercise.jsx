import { useState } from 'react';
import React from 'react'
import ExerciseCart from '../Components/ExerciseCart'
import Pagination from '../Components/Pagination';


function Exercise({exercises,setExercises,bodyPart}) {
  const [currentPage,setCurrentPage] = useState(1)
  const [exercisePerPage,setExercisePerPage] = useState(9)


  const lastExerciseIndex = currentPage * exercisePerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisePerPage
  const currentExercises = exercises.slice(firstExerciseIndex,lastExerciseIndex);


  console.log("execises are :", exercises)
  return (
    <div className='flex h-screen w-[1400px] flex-col gap-10 py-20'>
      <div><h1 className='mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl text-center'>Exercise</h1></div>
      <div className='flex gap-4 flex-wrap justify-center mx-auto'>

        {
           currentExercises.map((exercise,index)=>(
               <ExerciseCart exercises = {exercise} key={index}/>
         ))
        }
      </div> 
      <div className='flex justify-center items-center px-4 py-24 flex-wrap'>
      <Pagination
          totalExercises = {exercises.length} 
          exercisePerPage = {exercisePerPage}
          setCurrentPage = {setCurrentPage}
          currentPage = {currentPage}
         />
      </div>
    </div>
  )
}

export default Exercise