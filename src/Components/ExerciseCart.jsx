import React from 'react'
import {Link} from 'react-router-dom'
function ExerciseCart({exercises}) {

  return (
    <Link 
    to={`/exercise/${exercises.id}`}
    className='flex flex-col justify-start gap-4 p-6 bg-gray-200 rounded-md w-[30%] cursor-pointer'>
        <div>
            <img src={exercises.gifUrl} alt="" className='h-[400px] w-[350px]' />
        </div>
        <div className='flex justify-start gap-2'>
            <div className='btn px-5 py-2 bg-pink-400 border-none hover:bg-pink-500 hover:border-none rounded-2xl text-lg text-white cursor-pointer'>{exercises.equipment}</div>
            <div className='px-5 py-2 bg-yellow-400 border-none hover:bg-yellow-500 hover:border-none rounded-2xl text-lg text-white cursor-pointer'>{exercises.target}</div>
        </div>
        <div><h3 className='text-3xl font-bold'>{exercises.name}</h3></div>
        
    </Link>
  )
}

export default ExerciseCart