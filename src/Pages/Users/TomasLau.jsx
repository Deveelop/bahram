import HeaderUsers from "./HeaderUsers";
import { UserPostsArray } from "../../Components/userspostarray";
import { FaSearch } from "react-icons/fa";
import { ReadingLists } from "../../Components/readinglists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SwiperBtn from "../Porpular/SwiperBtn";
import MyTagsComponent from "./MyTagsComponent";
import { CountArray } from "../../Components/countarray";
import Newsteller from "../../Components/Newsteller";
import MyCalendar from "../../Components/MyCalendar";
const TomasLau = () => {
  
  return (
    <>
      <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
        <HeaderUsers />
        <div className=" mb-20 pt-10 w-[75%] m-auto">
          <h6 className=" text-xs">
            <span className="text-[#C8C8C8]">Home</span> —
            <span className="text-[#9B9B9B]">Tomas Laurinavicius</span>
          </h6>
          <div className=" md:grid md:grid-cols-3 gap-4 mt-10">
           
            <div className=" md:col-span-2 mb-10">
              <div className=" bg-[#FFFFFF] rounded-md h-[315px] shadow-sm  shadow-gray-500 ">
                <div className=" flex justify-center flex-col items-center w-full h-full gap-4">
                  <div className=" mt-8 md:mt-0">
                    <img
                      className="w-[50px] rounded-[50px]"
                      src="/profile1.png"
                      alt="ywfuw"
                    />
                  </div>
                  <div className=" text-center">
                    <h1 className=" text-[#111210] text-[18px]">
                      TOMAS LAURINAVICIUS
                    </h1>
                    <p className=" text-[#4A4A4A] text-xs md:text-[16px]">
                      Hi, my name is Daniel, I'm the CTO here at Kinsta.
                    </p>
                  </div>
                  <div className="flex justify-center gap-x-4 md:gap-x-8 col-span-3 md:col-span-1 py-4 mt-4 md:mt-0">
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     
                      <img src="/Vk.png" />
                    </a>
                    <a
                      className=" "
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
               
                      <img src="/Pinterest.png" />
                    </a>
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   
                      <img src="/Instagram.png" />
                    </a>
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   
                      <img src="/Twitter.png" />
                    </a>
                    <a
                      className=" "
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      
                      <img src="/Facebook.png" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                {UserPostsArray.map((posts) => {
                  return (
                    <div className="" key={posts.id}>
                      <div className=" mt-10">
                        <img 
                          className=" rounded-lg"
                          src={posts.url}
                          alt={posts.id}
                        />
                      </div>
                      <div className=" md:flex gap-10 py-1 ">
                        <span className=" flex text-nowrap gap-1 md:gap-3">
                          <label className=" text-xs md:text-sm font-semibold text-[#9B9B9B]">
                            BY
                          </label>
                          <p className=" text-[#000000] text-xs  md:text-sm">
                            {posts.author}
                          </p>
                        </span>
                        <span className="flex text-nowrap gap-1 md:gap-3">
                          <label className=" text-xs md:text-sm font-semibold text-[#9B9B9B]">
                           
                            IN
                          </label>
                          <p className=" text-[#000000] text-xs md:text-sm">
                            {posts.category}
                          </p>
                        </span>
                      </div>
                      <div className="">
                        <h1 className=" font-bold md:text-2xl">
                          {posts.title}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" mt-20 ">
          <Swiper
                  modules={[Navigation]}
                  spaceBetween={1}
                  slidesPerView={3}
                  navigation={{ clickable: true}}
                  className=""
                 
                 
                >
                  <div>
                    { CountArray.map((reads) => {
                      return (
                        <SwiperSlide key={reads.id} className="">
                          <div className=" md:w-[79px] w-[30px] h-[30px]  md:h-[79px]  flex justify-center items-center rounded-full bg-[#F1F1F1] hover:bg-[#FF5480] hover:text-white">
                           <p className=" text-xs md:text-lg">{reads.counts}</p>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
          </div>
           
            </div>

            <div className=" col-span-1 ">
              <div className=" ">
                <form className="relative">
                  <input
                    className=" focus:outline-none border-2 rounded-lg border-gray-200 h-[83px] w-full placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1  text-ellipsis"
                    placeholder="Type something..."
                  />

                  <FaSearch className="  absolute top-8 right-0 mr-10" />
                </form>
              </div>

              <div className="  mt-5 bg-[#FFFFFF] h-[483px] border-2 rounded-lg border-gray-200">
                <h1 className=" text-center py-8 font-semibold">
                  POPULAR POST
                </h1>
                <div className=" px-4">
                  <div className=" pb-4 flex gap-4 ">
                    <div>
                      <img
                        className=" rounded-lg"
                        src="/little2.png"
                        alt="yetwutr"
                      />
                    </div>
                    <div className="">
                      <p className=" text-[#9B9B9B]">DESIGN PROCES</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        Our 15 favorite websites from August
                      </p>
                    </div>
                  </div>

                  <div className=" pb-4 flex gap-4">
                    <div className=" ">
                      <img
                        className="  rounded-lg"
                        src="/little1.png"
                        alt="yetwutr"
                      />
                    </div>
                    <div className=" ">
                      <p className=" text-[#9B9B9B]">INSPIRATION</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        The beginners guide to user research
                      </p>
                    </div>
                  </div>

                  <div className=" flex gap-4">
                    <div className=" w-[150px]">
                      <img
                        className=" rounded-lg"
                        src="/little3.png"
                        alt="yetwutr"
                      />
                    </div>
                    <div className=" ">
                      <p className=" text-[#9B9B9B]">INSPIRATION</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        Web page layout 101: website anatomy every designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  mt-5 bg-[#FFFFFF] h-[483px] border-2 rounded-lg border-gray-200">
                <h1 className=" text-center py-8 font-semibold">RECENT POST</h1>
                <div className=" px-4">
                  <div className=" pb-4 flex gap-4 ">
                    <div className="">
                      <p className=" text-[#9B9B9B]">DESIGN PROCES</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        Our 15 favorite websites from August
                      </p>
                    </div>
                  </div>

                  <div className=" pb-4 flex gap-4">
                    <div className=" ">
                      <p className=" text-[#9B9B9B]">INSPIRATION</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        The beginners guide to user research
                      </p>
                    </div>
                  </div>

                  <div className=" pb-4 flex gap-4">
                    <div className=" ">
                      <p className=" text-[#9B9B9B]">INSPIRATION</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer ">
                        Web page layout 101: website anatomy every designer
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-4">
                    <div className=" ">
                      <p className=" text-[#9B9B9B]">FREELANCING</p>
                      <p className=" font-semibold hover:text-[#FF5480] cursor-pointer">
                        10 essential sections to a high landing page
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="  mt-5 bg-[#FFFFFF] h-[188px] border-2 rounded-lg border-gray-200">
                <div className=" flex flex-col w-full h-full items-center justify-center gap-5">
                  <p className=" font-semibold">SUBSCRIBE</p>
                  <form className="flex justify-center">
                    <input
                      className=" md:w-[160px] w-[150px] h-[50px] rounded-[25px] bg-[#FFFFFF] focus:border-transparent focus:outline-none focus:shadow-lg  placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1 shadow-sm shadow-gray-500 "
                      placeholder="Your email"
                    />
                    <button className="   h-[50px] p-4 rounded-full md:rounded-[25px] bg-[#FF5480] text-white font-semibold md:text-sm -ml-16 shadow-sm shadow-gray-500">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-5">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={15}
                  slidesPerView={1.6}
                 
                  className="flex relative"
                >
                  <div>
                    {ReadingLists.map((reads) => {
                      return  <SwiperSlide key={reads.id} className="">
                          <div className=" h-[225px]">
                            <img
                              className=" rounded-lg"
                              src={reads.url}
                              alt={reads.id}
                            />
                            <h1 className=" text-center font-semibold">
                              {reads.title}
                            </h1>
                          </div>
                        </SwiperSlide>
                      
                    })}
                  </div>
                  <SwiperSlide/>
                  <div className=" z-50 absolute right-0 w-[80px] md:h-[210px] h-[160px]">
                  <SwiperBtn/>
                  </div>
                </Swiper>
              </div>

              <div className="  mt-5 bg-[#FFFFFF] h-[188px] border-2 rounded-lg border-gray-200">
                <div className=" flex flex-col w-full h-full items-center justify-center gap-5">
                  <p className=" font-semibold">SOCIAL MEDIA</p>
                  <div className="flex justify-center gap-x-4 py-2 mt-8 md:mt-0">
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <img src="/Vk.png" />
                    </a>
                    <a
                      className=" "
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      
                      <img src="/Pinterest.png" />
                    </a>
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <img src="/Instagram.png" />
                    </a>
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <img src="/Twitter.png" />
                    </a>
                    <a
                      className=" "
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <img src="/Facebook.png" />
                    </a>
                  </div>
                </div>
              </div>

              <div className=" mt-5 ">
              <MyCalendar/>
              </div>
              <div className="  mt-5 bg-[#FFFFFF] h-[188px] border-2 rounded-lg border-gray-200">
                <div className=" flex flex-col w-full h-full items-center justify-center gap-5">
                <p className=" font-semibold">ADS BANNER</p>
                </div>
                </div>

                <div className=" mt-10">
                 <MyTagsComponent/>
                </div>

            </div>
          </div>
          
         <Newsteller/>
        
        </div>
      </div>
    </>
  );
};

export default TomasLau;
