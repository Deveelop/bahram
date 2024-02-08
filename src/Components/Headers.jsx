import React from 'react'
import {FaSearch, FaBars} from 'react-icons/fa'
const Headers = () => {
  return (
    <header className=' bg-[#F9F9FB] '>
      
      <div className=' items-center flex justify-between p-4  ml-10 mr-10'>
      <nav className=' hidden md:flex gap-8 items-center'>
        <a href='#' className=' font-semibold'>Popular</a>
        <button className=' w-[78px] h-[35px]  font-semibold text-white  rounded-lg bg-[#FF5480]'>New</button>
      </nav>
      <div>
      <img className=' w-[99px] h-[29px]' src='/logo.png' alt='Bahram'/>
      </div>
      <div className='flex gap-8'>
        <FaBars/>
        <FaSearch/>
      </div>
      </div>
    </header>
  )
}

export default Headers