import { useSwiper } from "swiper/react"
import {FaChevronRight} from 'react-icons/fa'
const SwiperBtn = () => {
    const swiper = useSwiper();
  return (
    <div className="  swiper-nav-btns">
      <button className=" flex justify-center items-center w-[80px] h-[249px] bg-[#FFFFFF] shadow-sm shadow-gray-500 rounded-lg" onClick={() => swiper.slideNext() } ><FaChevronRight/></button>
    </div>
  )
}

export default SwiperBtn;
