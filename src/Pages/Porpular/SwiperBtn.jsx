import { useSwiper } from "swiper/react"
import {FaChevronRight} from 'react-icons/fa'
const SwiperBtn = () => {
    const swiper = useSwiper();
  return (
    <div className="  swiper-nav-btns">
      <button className=" flex justify-center items-center md:w-[80px] w-[40px] h-[60px] md:h-[249px] bg-[#FFFFFF] shadow-sm shadow-gray-500 rounded-lg" onClick={() => swiper.slideNext() } ><FaChevronRight/></button>
    </div>
  )
}

export default SwiperBtn;
