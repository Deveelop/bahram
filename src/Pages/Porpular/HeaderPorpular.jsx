
import {FaSearch, FaBars} from 'react-icons/fa'
const HeaderPorpular = () => {
  return (
    <header className=' bg-[#FFFFFF] '>
      
      <div className=' items-center flex justify-evenly p-4  ml- mr-10'>
      <div>
      <img className=' w-[99px] h-[29px]' src='/logo.png' alt='Bahram'/>
      </div>
      <nav className=' hidden md:flex gap-8 items-center'>
        <a href='#' className=' font-semibold'>Popular</a>
        <button className=' w-[78px] h-[35px]  font-semibold text-white  rounded-lg bg-[#FF5480]'>New</button>
        <a href='#' className=' font-semibold'>Reading list</a>
        <a href='#' className=' font-semibold'>Topics</a>
        <a href='#' className=' font-semibold'>Subscribe</a>
      </nav>
      <div className='flex gap-8'>
      <FaBars className=' md:hidden cursor-pointer'/>
        <FaSearch className=' cursor-pointer'/>
      </div>
      </div>
    </header>
  )
}

export default HeaderPorpular;