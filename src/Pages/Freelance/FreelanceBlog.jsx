import HeaderFreelance from "./HeaderFreelance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { InstaStories } from "../../Components/instastories";

const FreelanceBlog = () => {
  return (
    <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
      <HeaderFreelance />
      <div className=" mb-20 pt-10 w-[75%] m-auto">
        <div className=" grid grid-cols-3 gap-3">
          <div className=" col-span-2">
            <div className=" ">
              <img className=" rounded-lg" src="/u1.png" alt="utfiufe" />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                How to Migrate from Wix to WordPress (Complete Guide)
              </h1>
            </div>
          </div>

          <div className=" col-span-1 ">
            <div className=" ">
              <img
                className=" h-[436px] rounded-lg"
                src="/dsb12.png"
                alt="utfiufe"
              />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                10 Best WordPress Directory Plugins
              </h1>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-3 mt-10">
          <div className=" col-span-1 ">
            <div className=" ">
              <img
                className=" h-[436px] rounded-lg"
                src="/slide1.png"
                alt="utfiufe"
              />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                9 Best WordPress LMS Plugins
              </h1>
            </div>
          </div>

          <div className=" col-span-2">
            <div className=" ">
              <img
                className=" w-full h-[436px] rounded-lg"
                src="/dsb5.png"
                alt="utfiufe"
              />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                Preparing Your WordPress Site for the Google Mobile-First Index
              </h1>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-3 mt-10">
          <div className=" col-span-2">
            <div className=" ">
              <img className=" rounded-lg" src="/u3.png" alt="utfiufe" />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                How To Use Yoast SEO On WordPress: Complete Tutorial
              </h1>
            </div>
          </div>

          <div className=" col-span-1 ">
            <div className=" ">
              <img
                className=" h-[436px] rounded-lg"
                src="/dsb2.png"
                alt="utfiufe"
              />
            </div>
            <div className=" flex gap-10 py-1 ">
              <span className=" flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  BY
                </label>
                <p className=" text-[#000000] text-xs  md:text-xs">
                  TOMAS LAURINAVICIUS
                </p>
              </span>
              <span className="flex text-nowrap gap-1 md:gap-3">
                <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">
                  IN
                </label>
                <p className=" text-[#000000] text-xs md:text-xs">RESOURCE</p>
              </span>
            </div>
            <div>
              <h1 className=" font-bold md:text-xl">
                Interview with David Vongries
              </h1>
            </div>
          </div>
        </div>

        <div className=" mt-20">
          <button className="  m-auto w-[200px] h-[70px] border-[2px] border-[#FF5480] flex justify-center items-center rounded-[35px] text-[#FF5480] font-semibold text-2xl ">
            Load More
          </button>
        </div>
        <div className=" mt-20 ">
          <h1 className=" text-center text-[28px] font-semibold">Instagram Stories</h1>
          <div>
            <Swiper
              modules={[Navigation]}
             
              spaceBetween={5}
              slidesPerView={8}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log({ swiper })}
          
            >
          
                { InstaStories.map((reed)=>{
                 return   <SwiperSlide key={reed.id} className=" mt-10">
                     
                        <img  className=" h-[240px] rounded-lg" src={reed.url} alt={reed.id}/>
                   
                    </SwiperSlide>
                 
                })}
             
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceBlog;
