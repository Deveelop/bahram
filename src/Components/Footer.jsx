// import { BsInstagram, BsFacebook, BsTwitter, BsPinterest, } from 'react-icons/bs'
const Footer = () => {
    return(
        <footer className=" h-[100px] bg-[#FFFFFF]">
      <div className=" max-w-[90%] m-auto mt-10">
     <div className=" md:flex justify-between items-center">
      <div className=" flex justify-center">
      <img className=" opacity-30 hover:opacity-60" src="/logo.png" alt="bahram"/>
      </div>

   
      <div className="flex justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
           <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Vk.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Pinterest.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Instagram.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Twitter.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Facebook.png"/> </a>
    
    {/* Another better Ui */}
    {/* <a className=" opacity-30 hover:opacity-50" href="http://" target="_blank" rel="noopener noreferrer"> <BsFacebook size={25} /> </a>
          <a className=" opacity-30 hover:opacity-60" href="http://" target="_blank" rel="noopener noreferrer"> <BsInstagram size={25} /> </a>
          <a className=" opacity-30 hover:opacity-60"  href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter size={25} /> </a>
          <a className=" opacity-30 hover:opacity-60" href="http://" target="_blank" rel="noopener noreferrer"> <BsPinterest size={25} /> </a> */}

    </div> 
   

      <div className=" text-center">
      <p className=" text-gray-500">
        All rights reserved {new Date().getFullYear()} 3layers
        </p>
      </div>
     </div>
     </div>
     </footer>
    )
}

export default Footer;