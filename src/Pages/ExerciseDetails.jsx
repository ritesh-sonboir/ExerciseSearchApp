import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilerExercises from '../Components/SimilerExercises'
import {fetchDatabodypart,exerciseOptions,youtubeOptions} from '../utils/fetchData'


function ExerciseDetails() {
  const [exerciseDetail, serExerciseDetail] = useState({})
  const [exerciseVideo,setExerciseVideo] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const getExerciseData = async() =>{
    const exerciseUrl = 'https://exercisedb.p.rapidapi.com'
    const exerciseData =  await fetchDatabodypart(`${exerciseUrl}/exercises/exercise/${id}`,exerciseOptions)
    console.log(exerciseData)
    serExerciseDetail(exerciseData)
    
    const reletedVideoUrl = 'https://youtube-search-and-download.p.rapidapi.com'

    const exerciseVideoData = await fetchDatabodypart(`${reletedVideoUrl}/search?query=${exerciseData.name}-exercise`,youtubeOptions)
    const videos = exerciseVideoData.contents.slice(1,7)
    console.log(videos)
    setExerciseVideo(videos)

    //https://www.youtube.com/watch?v=rhfNu52jV9A
    }
    
    getExerciseData()
  },[id])
 // const urlForExerciseData = `https://exercisedb.p.rapidapi.com/exercises/exercise/3013`
  return (
    <div className='flex flex-col '>
        <Detail exerciseDetail = {exerciseDetail}/>
        <ExerciseVideos reletedVideo = {exerciseVideo} exerciseName = {exerciseDetail.name}/>
        <SimilerExercises/>
    </div>
  )
}

export default ExerciseDetails