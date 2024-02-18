import {FaSearch, FaBars} from 'react-icons/fa'

const HeaderProfessional = () => {
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
      <img className=' w-[99px] h-[29px]' src='/Group 13.png' alt='Bahram'/>
      </div>
      <div className='flex gap-8'>
        <FaBars className=' cursor-pointer' color='white'/>
        <FaSearch className=' cursor-pointer' color='white'/>
      </div>
      </div>
    </header>
  )
}

export default HeaderProfessional;