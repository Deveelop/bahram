import {FaSearch, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const HeaderPersonal = () => {
  return (
    <header className=''>
      
      <div className=' items-center flex justify-between p-4  ml-10 mr-10'>
      <nav className=' hidden md:flex gap-8 items-center'>
      <Link to='/porpular'><a href='#' className=' font-semibold'>Popular</a></Link> 
      <Link to='/new'><button className=' w-[78px] h-[35px]  font-semibold text-white  rounded-lg bg-[#FF5480]'>New</button></Link>
      </nav>
      <div>
      <img className=' w-[99px] h-[29px]' src='/logo.png' alt='Bahram'/>
      </div>
      <div className='flex gap-8'>
        <FaBars className=' cursor-pointer'/>
        <FaSearch className=' cursor-pointer'/>
      </div>
      </div>
    </header>
  )
}

export default HeaderPersonal;