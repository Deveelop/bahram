import { useState } from 'react'
import {FaSearch, FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const HeaderProfessional = () => {
  const [nav, setnav] = useState(true)
    const handlenav = () => { setnav(!nav) }
  return (
    <header className=''>
      
      <div className=' items-center flex justify-between p-4  ml-10 mr-10'>
      <nav className=' hidden md:flex gap-8 items-center'>
      
        <span className=' bg-[#FFFFFF] cursor-pointer hover:bg-[#FF5480] w-[19px] h-[19px] rounded-full flex justify-center items-center'><span><img src='/socials1.png' alt='ugfi'/></span></span>
        <span className=' bg-[#FFFFFF] cursor-pointer hover:bg-[#FF5480] w-[19px] h-[19px] rounded-full flex justify-center items-center'><span><img src='/socials2.png' alt='ugfi'/></span></span>
        <span className=' bg-[#FFFFFF] cursor-pointer hover:bg-[#FF5480] w-[19px] h-[19px] rounded-full flex justify-center items-center'><span><img src='/socials4.png' alt='ugfi'/></span></span>
        <span className=' bg-[#FFFFFF] cursor-pointer hover:bg-[#FF5480] w-[19px] h-[19px] rounded-full flex justify-center items-center' ><span><img src='/socials5.png' alt='ugfi'/></span></span>
     
      </nav>
      <div>
      <img className=' hidden md:block w-[99px] h-[29px]' src='/Group 13.png' alt='Bahram'/>
      </div>
      <div className='flex gap-8'>
        <FaBars className=' hidden md:block  cursor-pointer' color='white'/>
        <FaSearch className='hidden md:block  cursor-pointer' color='white'/>
      </div>
      <nav className="w-full flex flex-wrap justify-between place-items-center p-4 pt-3 md:hidden text-white">
            <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                { !nav ? <FaTimes/> : <FaBars /> }
            </button>

            {/* <Logo /> */}

            <div className="flex">
                
                
                <FaSearch className=' md:hidden cursor-pointer'/>
            </div>
        </nav>
      </div>
      <nav className={ !nav ? 'fixed left-0 top-0 w-full h-screen flex md:hidden' : 'fixed hidden md:hidden'}>
            <figure className="w-[70%] h-full pb-4 bg-[#012E6D] overflow-y-scroll">
                <div className="flex justify-between p-4 pl-3 mt-1 border-b-2 border-gray-400 text-white">
                    <Link to='/' className=' bg-white rounded'>
                    <span >
                    <img src='/logo.png' alt='company' className=' w-10'/>
                    </span>
                    </Link>
                    <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                        { !nav ? <FaTimes/> : <FaBars/> }
                    </button>
                </div>

                <ul>
                    <li className='flex flex-col border-b-2 border-gray-400 text-white'>
                       <Link to='/business-blog'  className='ml-3'>Business Blog</Link>
                       <Link to='/professional-blog'  className='ml-3'>Professsional Blog</Link>
                       <Link to='/freelance-blog'  className='ml-3'>Freelance Blog</Link>
                    </li>

                    <Link to='/porpular' className='flex flex-col text-white'>
                        <p className="font-md text-[--col] p-3">{/**/} </p>
                        <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            
            <p className=' cursor-pointer ml-3 '>Popular </p>
        </div>
                    </Link>
                    <Link to='/new' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>New</p>
        </div>
          
        </Link>
                    <Link to='/reading-lists' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Reading lists</p>
        </div>
         
        </Link>
                    <Link to='/topics' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Topics</p>
        </div>
        </Link>
                    <Link to='/posts-page' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Posts Page</p>
        </div>
        </Link>
                    <Link to='/user-tomas' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Users Page</p>
        </div>
        </Link>

                </ul>
            </figure>
            <figure className="w-[30%] h-full bg-black opacity-[0.6]"></figure>
        </nav>
    </header>
  )
}

export default HeaderProfessional;