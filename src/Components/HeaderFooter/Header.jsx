import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo/Logo.png'
function Header() {
  return (
    <div className ='flex justify-start h-[70px] items-center bg-pink-100 text-2xl p-20'>
        <div>
        <Link>
          <img src={logo} alt="" />
        </Link>
           
        </div>
        <div className='flex p-10 gap-10 text-black'>
            <Link to={'/'} className='text-black'>Home</Link>
            <span className='text-black'>Exercise</span>
        </div>
        
    </div>
  )
}

export default Header