import React from 'react'
// import gifdemo from '../assets/images/banner.png'
import equipmentIcon from '../assets/icons/equipment.png'
import targeIcon from '../assets/icons/target.png'
import bodyPartIcon from '../assets/icons/body-part.png'
function Detail({exerciseDetail}) {
  return (
    <div className='flex items-center px-5 py-10 w-full justify-center h-[70vh] bg-cover'>
        <div className='flex w-[40%] justify-end'>
          <img src={exerciseDetail.gifUrl} alt="" className='h-[480px] w-[400px] pr-8' />
        </div>
        <div className='flex flex-col gap-6 w-[60%] pl-5'>
          <h2 className=' text-4xl font-semibold'>{exerciseDetail.name}</h2>
          <p className='text-xl pr-10'>Exercises keep you strong. {exerciseDetail.name} is one of the best
               exercise to target your {exerciseDetail.target}. It will help you improve your mood 
               and gain energy           
          </p>
          <div className='flex gap-4 flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <img src={equipmentIcon} alt="" className='p-4 hover:bg-pink-200  bg-green-100 rounded-full size-16' />
              <p className='text-xl '>
              <span className='text-xl font-semibold'>Equipments : </span>
                {exerciseDetail.equipment}
              </p>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img src={targeIcon} alt="" className='p-4 hover:bg-pink-200  bg-green-100 rounded-full size-16' />
              <p className='text-xl'>
              <span className='text-xl font-semibold'>Target : </span>
                {exerciseDetail.target}
              </p>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img src={bodyPartIcon} alt="" className='p-4 hover:bg-pink-200  bg-green-100 rounded-full size-16' />
              <p className='text-xl'>
                <span className='text-xl font-semibold'>Body Part : </span>
                {exerciseDetail.bodyPart}</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Detail