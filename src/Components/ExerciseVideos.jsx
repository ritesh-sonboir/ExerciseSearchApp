import React from 'react'
//import SingleVideo from './SingleVideo'
function ExerciseVideos({reletedVideo,exerciseName}) {
  
  return (
    <div className='flex flex-col'>
      <h2 className=' text-4xl font-semibold text-center py-20'>
        <span className='text-pink-500'>{exerciseName}</span>
        {' '} releted Youtube videos
        </h2>
       <div className='flex w-full items-center gap-3 justify-center px-20 min-h-screen flex-wrap'>
        {
      reletedVideo.map((val,i)=>(
       // <h1 key={i}>{val.video.title}</h1>
        <div key={i} className='flex w-[30%]' >
          <a href={`https://www.youtube.com/watch?v=${val.video.videoId}`}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
            <img className="rounded-t-lg" src={val.video.thumbnails[0].url} alt="" />
    
           <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val.video.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {val.video.description}
            </p>
       
           </div>
         </div>
      </a>
    </div>
      ))   
    }
    </div>
    </div>
  )
}

export default ExerciseVideos