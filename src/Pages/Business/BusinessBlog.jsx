import HeaderBusiness from "./HeaderBusiness"
import { ReadingLists } from "../../Components/readinglists"
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules'
import SwiperBtn from "../Porpular/SwiperBtn";
const BusinessBlog = () => {
  return (
    <>
    <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
    <HeaderBusiness/>

    <div className=" pb-20 w-[75%] m-auto flex flex-col gap-10">
        
        <div className="grid grid-cols-3 mt-20">

        <div className=" col-span-2 rounded-2xl bg-[url('/Card.png')] w-[573px] bg-cover bg-no-repeat bg-center h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" flex gap-5 ">
            <span className=" flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]">BY</label><p className=" text-[#FFFFFF] text-xs  md:text-xs">TOMAS LAURINAVICIUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div className=" py-4 ">
          <h1 className="font-bold md:text-l text-white">How to accept rejection gracefully — and use it to grow</h1>
          <p className="text-white py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
        </div>
        </div>

        <div className=" col-span-1">
         <div>
            <div className=" flex  justify-between mb-5 items-center ">
                <h1 className=" font-bold text-[24px]">New</h1>
                <a href="#" className=" text-[#9B9B9B]">View all New</a>
            </div>
            <div className="border-b"/>
            <div className=" py-3">
            <h1 className=" text-[#9B9B9B]">SEP  04  2018</h1>
            <a href="#" className=" hover:text-[#FF5480]">Our 15 favorite websites from August 2018</a>
            </div>
            <div className=" py-2">
            <h1 className=" text-[#9B9B9B]">SEP  04  2018</h1>
            <a href="#" className=" hover:text-[#FF5480]">The beginners guide to user research</a>
            </div>
            <div className=" py-2">
            <h1 className=" text-[#9B9B9B]">SEP  04  2018</h1>
            <a href="#" className=" hover:text-[#FF5480]">Web page layout 101: website anatomy every designer needs to learn</a>
            </div>
            <div className=" py-2">
            <h1 className=" text-[#9B9B9B]">SEP  04  2018</h1>
            <a href="#" className=" hover:text-[#FF5480]">10 essential sections to a high-converting landing page</a>
            </div>
         </div>
        </div>
        </div>

        <div>
          <div className=" flex justify-between">
            <h1 className=" text-2xl font-bold mb-10">Reading lists</h1>
            <a href="#" className=" text-[#FF5480]">View all</a>
          </div>
          <div>
          <Swiper
        modules={[Navigation]} 
         spaceBetween={15}
         slidesPerView={4}
        
        
         onSlideChange={()=> console.log('slide change')}
         onSwiper={(swiper)=> console.log({swiper})}
         className="flex relative"
         >
          <div>
         {
           ReadingLists.map((reads)=>{
            return <SwiperSlide key={reads.id} className="">
            
               <div className=" h-[225px]">
                <img className=" rounded-lg" src={reads.url} alt={reads.id}/>
               <h1 className=" text-center font-semibold">{reads.title}</h1>
               </div>
               </SwiperSlide>
           
           
           })
         }
         </div>
         
          
          
          <div className=" z-50 absolute right-0">
          <SwiperBtn />
          </div>
        
         </Swiper>
          </div>
        </div>

        <div>
        <div className="flex justify-between mt-20 mb-5">
        <h1 className=" text-2xl font-bold">Popular</h1>
        <a href="#" className=" text-[#9B9B9B]">View all</a>
        </div>
        <div className=" flex justify-between gap-4 items-center">
        <div className=" rounded-2xl bg-[url('/Card.png')] w-[573px] bg-cover bg-no-repeat bg-center h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" flex gap-5 ">
            <span className=" flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]">BY</label><p className=" text-[#FFFFFF] text-xs  md:text-xs">TOMAS LAURINAVICIUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div className=" py-4 ">
          <h1 className="font-bold md:text-l text-white">10 Best WordPress Event Management Plugins (Calendars, Ticketing, RSVPs)</h1>
          <p className="text-white py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
        </div>
        </div>

        <div className="grid grid-cols-2 gap-7 h-[358px] ">
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className=" p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">7 Best WordPress Caching Plugins for 2018</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">Kinsta Kingpin: Interview with Kevin Muldoon</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">DESIGN PROCESS</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >8 Ways To Leverage LinkedIn for Marketing</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">INSPIRATION</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >Working Remotely – Everything You Need</a></p>
          </div>
         </div>
        </div>

        </div>
        </div>

         <div>
            <h1>Random</h1>
        <div className=" pt-10 grid md:mb-10">
           

              <div className="bg-[#FFFFFF] shadow-sm shadow-gray-500 items-center grid md:grid-cols-2 rounded-lg">
                <div className=" ">
                <div className=" flex gap-5 ">
            <span className=" flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]">BY</label><p className=" text-[#FFFFFF] text-xs  md:text-xs">TOMAS LAURINAVICIUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
              <h1 className=" font-semibold pl-5 md:text-[28px]">Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)</h1>
              <p className="text-[#9B9B9B] pl-5 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
             </div>

             
                <img className=" h-[100%] md:rounded-r-lg" src='/chap3.png' alt='uhriougwweoiy'/>
              
              </div>
           
          </div>
          </div>


          <div>
        <div className="flex justify-between mt-20 mb-5">
        <h1 className=" text-2xl font-bold">Essentials</h1>
        <a href="#" className=" text-[#9B9B9B]">View all</a>
        </div>
        <div className=" flex justify-between gap-4 items-center">

        <div className="grid grid-cols-2 gap-7 h-[358px] ">
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className=" p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">10 WordPress Lead Generation Plugins</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">RIP HHVM – We’ve Had a Good Run</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">DESIGN PROCESS</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >How to Add a Stripe Donate Button</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">INSPIRATION</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >How to Set up Sucuri Firewall (WAF)</a></p>
          </div>
         </div>
        </div>

        <div className=" rounded-2xl bg-[url('/Card1.png')] w-[573px] bg-cover bg-no-repeat bg-center h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" flex gap-5 ">
            <span className=" flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]">BY</label><p className=" text-[#FFFFFF] text-xs  md:text-xs">TOMAS LAURINAVICIUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-2">
              <label className=" text-xs md:text-xs font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div className=" py-4 ">
          <h1 className="font-bold md:text-l text-white">How to Quickly Fix WordPress Mixed Content Warnings (HTTPS/SSL)</h1>
          <p className="text-white py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
        </div>
        </div>

       

        </div>
        </div>

        <div className=" grid grid-cols-2 gap-3">
          <div>
          <div className=" mt-10">
          <img className=" rounded-lg" src='/chap1.png' alt='posts'/>
          </div>
          <div className=" flex gap-5 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-xs">TOMAS LAURINAVICUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">Website Downtime: Applicable Tips on How to Prevent It</h1>
          </div>
          <p className="text-[#9B9B9B] py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
          <div>
          <div className=" mt-10">
          <img className=" rounded-lg" src='/business2.png' alt='posts'/>
          </div>
          <div className=" flex gap-5 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-xs">TOMAS LAURINAVICUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">How to Fix Error 404 Not Found on Your WordPress Site</h1>
          </div>
          <p className="text-[#9B9B9B] py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
        </div>
    </div>

    </div>
   
      
    </>
  )
}

export default BusinessBlog
