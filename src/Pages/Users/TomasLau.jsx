import HeaderUsers from "./HeaderUsers"
import { UserPostsArray } from "../../Components/userspostarray"
import { FaSearch } from "react-icons/fa"
const TomasLau = () => {
  return (
    <>
    <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
    <HeaderUsers/>
    <div className=" mb-20 pt-10 w-[75%] m-auto">
     <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home</span>  —  <span className="text-[#9B9B9B]">Tomas Laurinavicius</span>
        </h6>
    <div className=" grid grid-cols-3 gap-4 mt-10">
        <div className=" col-span-2">

            <div className=" bg-[#FFFFFF] rounded-md  h-[315px] shadow-sm  shadow-gray-500 ">
                <div className=" flex justify-center flex-col items-center w-full h-full gap-4">
                    <div>
                <img className="w-[50px] rounded-[50px]" src="/profile1.png" alt="ywfuw"/>
                    </div>
                    <div className=" text-center">
                <h1 className=" text-[#111210] font-[18px]">TOMAS LAURINAVICIUS</h1>
                <p className=" text-[#4A4A4A] font-[16px]">Hi, my name is Daniel, I'm the CTO here at Kinsta.</p>
                </div>
                <div className="flex justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
           <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Vk.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Pinterest.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Instagram.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Twitter.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Facebook.png"/> </a>
           </div> 

                </div>
            </div>

            <div>

                {
                 UserPostsArray.map((posts) => {
                    return  <div className="" key={posts.id}>
                    <div className=" mt-10">
                    <img className=" rounded-lg" src={posts.url} alt={posts.id}/>
                    </div>
                    <div className=" flex gap-10 py-1 ">
                      <span className=" flex text-nowrap gap-1 md:gap-3">
                        <label className=" text-sm md:text-sm font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-sm  md:text-sm">{posts.author}</p>
                      </span>
                      <span className="flex text-nowrap gap-1 md:gap-3">
                        <label className=" text-sm md:text-sm font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-sm md:text-sm">{posts.category}</p>
                      </span>
                    </div>
                    <div>
                      <h1 className=" font-bold md:text-2xl">{posts.title}</h1>
                    </div>
                 
                  </div>
                 })
                }
                
            </div>

        </div>

        <div className=" col-span-1">

            <div className=" relative">
             <form className=" flex ">
                <input className=" focus:outline-none border-2 rounded-lg border-gray-200 h-[83px] w-[378px] placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1  text-ellipsis" placeholder="Type something..."  />
                
                <FaSearch className="  absolute top-8 left-64"/>
             </form>
            </div>

            <div className="  mt-5 bg-[#FFFFFF] h-[403px] border-2 rounded-lg border-gray-200">
                    <h1 className=" text-center py-8 font-semibold">POPULAR POST</h1>
               <div className=" px-4">
                    <div className=" pb-4 flex gap-4 ">
                      <div>
                    <img className=" rounded-lg" src="/little2.png" alt="yetwutr"/>
                     </div>
                     <div className="">
                        <p className=" text-[#9B9B9B]">DESIGN PROCES</p>
                        <p className=" font-semibold">Our 15 favorite websites from August</p>
                     </div>
                    </div>
               
              
                <div className=" pb-4 flex gap-4">
                  <div className=" ">
                    <img className="  rounded-lg" src="/little1.png" alt="yetwutr"/>
                     </div>
                     <div className=" ">
                        <p className=" text-[#9B9B9B]">INSPIRATION</p>
                        <p className=" font-semibold text-[#FF5480]">The beginners guide to user research</p>
                     </div>
                    </div>
              
               
                   
                    <div className=" flex gap-4">
                     <div className=" w-[150px]">
                    <img className=" rounded-lg" src="/little3.png" alt="yetwutr"/>
                   </div>
                     <div className=" ">
                        <p className=" text-[#9B9B9B]">INSPIRATION</p>
                        <p className=" font-semibold">Web page layout 101: website anatomy every designer</p>
                     </div>
                    </div>
             
            </div>
</div>
<div className="  mt-5 bg-[#FFFFFF] h-[443px] border-2 rounded-lg border-gray-200">
                    <h1 className=" text-center py-8 font-semibold">RECENT POST</h1>
               <div className=" px-4">
                    <div className=" pb-4 flex gap-4 ">
                  
                     <div className="">
                        <p className=" text-[#9B9B9B]">DESIGN PROCES</p>
                        <p className=" font-semibold">Our 15 favorite websites from August</p>
                     </div>
                    </div>
               
              
                <div className=" pb-4 flex gap-4">
                  
                     <div className=" ">
                        <p className=" text-[#9B9B9B]">INSPIRATION</p>
                        <p className=" font-semibold text-[#FF5480]">The beginners guide to user research</p>
                     </div>
                    </div>
              
               
                   
                    <div className=" pb-4 flex gap-4">
                    
                     <div className=" ">
                        <p className=" text-[#9B9B9B]">INSPIRATION</p>
                        <p className=" font-semibold">Web page layout 101: website anatomy every designer</p>
                     </div>
                    </div>
                    <div className=" flex gap-4">
                    
                     <div className=" ">
                        <p className=" text-[#9B9B9B]">FREELANCING</p>
                        <p className=" font-semibold">10 essential sections to a high landing page</p>
                     </div>
                    </div>
             
            </div>
</div>

<div className="  mt-5 bg-[#FFFFFF] h-[188px] border-2 rounded-lg border-gray-200">
  <div className=" flex flex-col w-full h-full items-center justify-center gap-5">
    <p className=" font-semibold">SUBSCRIBE</p>
    <form className="flex justify-center">
      <input className=" md:w-[223px] h-[50px] rounded-[35px] bg-[#FFFFFF] focus:border-transparent focus:outline-none focus:shadow-lg  placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1 shadow-sm shadow-gray-500 " placeholder="Your email"/>
      <button className="   h-[50px] p-4 rounded-full md:rounded-[25px] bg-[#FF5480] text-white font-semibold md:text-sm -ml-16 shadow-sm shadow-gray-500">Subscribe</button>
      </form>
  </div>
</div>

<div className="  mt-5 bg-[#FFFFFF] h-[188px] border-2 rounded-lg border-gray-200">
  <div className=" flex flex-col w-full h-full items-center justify-center gap-5">
  <p className=" font-semibold">SOCIAL MEDIA</p>
  <div className="flex justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
  <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Vk.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Pinterest.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Instagram.png"/> </a>
          <a className="" href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Twitter.png"/> </a>
          <a className=" " href="http://" target="_blank" rel="noopener noreferrer"> <img src="/Facebook.png"/> </a>
          
          </div> 

  </div>
  </div>

           
        </div>
    </div>

    <div className="">

    </div>





        </div>
    </div>
    
      
    </>
  )
}

export default TomasLau
