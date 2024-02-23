import HeaderPorpular from "./HeaderPorpular";
import Newsteller from "../../Components/Newsteller";
import { Popularposts } from "../../Components/popularpost";
import { ReadingLists } from "../../Components/readinglists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SwiperBtn from "./SwiperBtn";

const Porpular = () => {
  return (
    <>
      <HeaderPorpular />
      <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
        <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
          <h1 className=" text-2xl font-bold">Reading lists</h1>
          <div className=" md:flex gap-10 items-center">
            <img className=" rounded-md" src="/chap6.png" alt="alt" />

            <div>
              <h1 className="font-bold text-[24px]">Popular</h1>
              <p className=" ">
                Check out the most-read and most-shared posts from the 3layers
                blog.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9FB]">
          <div className=" pt-10 w-[75%] m-auto">
            <h6 className=" text-xs">
            
              <span className="text-[#C8C8C8]">
                Home — Reading lists
              </span> — <span className="text-[#9B9B9B]">Popular</span>
            </h6>
            <div>
              {Popularposts.map((lists) => {
                return (
                  <div className=" pt-10 grid md:mb-10" key={lists.serialNo}>
                    <div className="bg-[#FFFFFF] shadow-sm shadow-gray-500 items-center grid md:grid-cols-2 rounded-lg">
                      <div className=" ">
                        <h1 className=" font-normal pl-5">{lists.serialNo}</h1>
                        <h1 className=" font-semibold pl-5 md:text-[28px]">
                          {lists.title}
                        </h1>
                        <p className="text-[#9B9B9B] pl-5 text-xs">
                          {lists.subj}
                        </p>
                      </div>

                      <img
                        className=" h-[100%] md:rounded-r-lg"
                        src={lists.url}
                        alt={lists.serialNo}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-10">
              <div className=" flex justify-between">
                <h1 className=" text-2xl font-bold">Reading lists</h1>
                <a href="#" className=" text-[#FF5480]">
                  View all
                </a>
              </div>
              <div className=" mt-5">
          <Swiper
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 4.6 },
        }} 
        slidesPerView={1.6}
        spaceBetween={15}
         className=" flex"
         >
        
         {
           ReadingLists.map((reads)=>{
            return <SwiperSlide key={reads.id} className="">
            
               <div className=" flex flex-col text-center ">
                <img className=" md:h-[225px] h rounded-lg" src={reads.url} alt={reads.id}/>
               <h1 className="  md:text-lg font-semibold">{reads.title}</h1>
               </div>
               </SwiperSlide>

           
           
           })
         }
        
          <SwiperSlide />
         
          
          <div slot=" " className=" z-50 absolute  top-0 bottom-0 right-0 w-[50px] md:h-[300px] h-[260px]">
          <SwiperBtn />
          </div>
        
         </Swiper>
          </div>
            </div>
          </div>

          
          <Newsteller />
        </div>
      </div>
    </>
  );
};

export default Porpular;
