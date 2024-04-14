import React, { useState } from 'react'
import HeroSection from '../Components/HeroSection'
import SearchInputSection from '../Components/SearchInputSection'
import Exercise from './Exercise'


function Home() {
    const [bodyPart,setBodyPart] = useState('all')
    const [exercises,setExercises] = useState([])


  return(
    <>
     <HeroSection/>
     <SearchInputSection
       setExercises = {setExercises}
       bodyPart = {bodyPart}
       setBodyPart = {setBodyPart}
     />
     <Exercise
       exercises = {exercises}
       setExercises = {setExercises}
       bodyPart = {bodyPart}
     />
    </>
  )
}

export default Home