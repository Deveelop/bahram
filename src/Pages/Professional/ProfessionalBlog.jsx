
import HeroProfessional from "./HeroProfessional"
import { ReadingLists } from "../../Components/readinglists"
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules'
import SwiperBtn from "../Porpular/SwiperBtn";

const ProfessionalBlog = () => {
  return (
    <div className=" w-[100%] bg-[#F9F9FB]">
     <HeroProfessional/>
     <div className=" pb-20 w-[75%] m-auto flex flex-col  gap-10">
      <div>
        <div className="flex justify-between mt-20 mb-5">
        <h1 className=" text-2xl font-bold">Popular</h1>
        <a href="#" className=" text-[#9B9B9B]">View all</a>
        </div>
        <div className=" md:flex justify-between gap-4 items-center">
        <div className=" rounded-2xl bg-[url('/Card.png')] md:w-[573px] bg-cover bg-no-repeat bg-center md:h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" md:flex gap-5 ">
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

        <div className="grid md:grid-cols-2 gap-7 md:h-[358px] ">
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
        <div className="flex justify-between mt-10 md:mt-20 mb-5">
        <h1 className=" md:text-2xl font-bold">Essentials</h1>
        <a href="#" className=" text-[#9B9B9B]">View all</a>
        </div>
        <div className=" md:flex justify-between gap-4 items-center">
        <div className=" rounded-2xl bg-[url('/Card.png')] md:w-[573px] bg-cover bg-no-repeat bg-center md:h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" md:flex gap-5 ">
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

        <div className="grid md:grid-cols-2 gap-7 md:h-[358px] ">
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

        </div>
        </div>

        <div>
        <div className=" md:flex justify-between mt-20 mb-5">
        <h1 className=" md:text-2xl font-bold">Freelance</h1>
        <a href="#" className=" text-[#9B9B9B]">View all</a>
        </div>
        <div className=" md:flex justify-between gap-4 items-center">
        <div className=" rounded-2xl bg-[url('/Card.png')] md:w-[573px] bg-cover bg-no-repeat bg-center md:h-[368px] flex justify-center flex-col ">
        <div className="p-8">
        <div className=" md:flex gap-5 ">
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

        <div className="grid md:grid-cols-2 gap-7 md:h-[358px] ">
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className=" p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">The 53 Best Tools for Freelancers</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">FREELANCING</h1>
            <p><a href="#" className=" hover:text-[#FF5480]">Why and How to Use Lossy Compression</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">DESIGN PROCESS</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >11 WordPress Instagram Plugins for Displaying</a></p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div className="p-8 font-semibold">
            <h1 className=" text-[#9B9B9B]">INSPIRATION</h1>
            <p><a href="#" className=" hover:text-[#FF5480]" >Kinsta Kingpin: Interview with James Laws</a></p>
          </div>
         </div>
        </div>
        
        </div>
        </div>

        <div>
          <div className=" flex justify-between">
            <h1 className=" md:text-2xl font-bold mb-10">Reading lists</h1>
            <a href="#" className=" text-[#FF5480]">View all</a>
          </div>
          <div>
          <Swiper
        modules={[Navigation]} 
        breakpoints={{
          640: { slidesPerView: 4.6 },
        }} 
        slidesPerView={1.6} 
        spaceBetween={15}
         className="flex relative"
         >
          <div>
         {
           ReadingLists.map((reads)=>{
            return <SwiperSlide key={reads.id} className="">
            
               <div className=" flex flex-col text-center">
                <img className="  md:h-[225px] rounded-lg" src={reads.url} alt={reads.id}/>
               <h1 className=" font-semibold">{reads.title}</h1>
               </div>
               </SwiperSlide>
           
           
           })
         }
         </div>
         
          
          
          <div className=" z-50 absolute right-0 w-[50px] md:h-[220px] h-[160px]">
          <SwiperBtn />
          </div>
        
         </Swiper>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-3">
          <div>
          <div className=" md:mt-10">
          <img className=" rounded-lg" src='/proslide1.png' alt='posts'/>
          </div>
          <div className=" md:flex gap-5 py-1 ">
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
          <div className=" mt-5 md:mt-10">
          <img className=" rounded-lg" src='/proslide2.png' alt='posts'/>
          </div>
          <div className=" md:flex gap-5 py-1 ">
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
  )
}

export default ProfessionalBlog;
