
import { FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const HeaderFreelance = () => {
  return (
    <header className=' '>
      
      <div className=' items-center flex justify-evenly p-4  ml- mr-10'>
      <div>
      <img className=' w-[99px] h-[29px]' src='/logo.png' alt='Bahram'/>
      </div>
      <div>
      <nav className=' hidden md:flex gap-8 items-center'>
       <Link to='/porpular' className=' font-semibold'>Popular</Link>
       <Link to='/new'><button className='  font-semibold text-[#FF5480]'>New</button></Link>

        <Link to='/reading-lists' className=' font-semibold'>Reading list</Link>
        <Link to='/topics' className=' font-semibold'>Topics</Link>
    
      <div className='flex gap-8'>
      <FaBars className=' md:hidden cursor-pointer'/>
      <div className='w-[88px] h-[35px]  text-white text-center place-content-center flex items-center  rounded-lg bg-[#9283E0]'>
      <a href='#' className=' font-semibold'>Subscribe</a>
      </div>
      </div>
      </nav>
      </div>
      </div>
    </header>
  )
}

export default HeaderFreelance;