import { useSwiper } from "swiper/react"
import {FaChevronRight} from 'react-icons/fa'
const SwiperBtn = () => {
    const swiper = useSwiper();
  return (
   
      <button className=" flex justify-center items-center w-full  h-full bg-[#FFFFFF] shadow-sm shadow-gray-500 rounded-lg" onClick={() => swiper.slideNext() } ><FaChevronRight/></button>
   
  )
}

export default SwiperBtn;
