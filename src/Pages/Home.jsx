import React, { useState } from 'react'
import HeroSection from '../Components/HeroSection'
import SearchInputSection from '../Components/SearchInputSection'
import Exercise from './Exercise'
import Header from '../Components/HeaderFooter/Header'



function Home() {
    const [bodyPart,setBodyPart] = useState('all')
    const [exercises,setExercises] = useState([])


  return(
    <>
     <Header/>
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