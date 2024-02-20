import HeaderProfessional from "./HeaderProfessional";
import { Link } from "react-router-dom";
const HeroProfessional = () => {
  return (
    <>
    <div className="bg-[url('/Pic.png')] bg-cover bg-no-repeat bg-center md:h-screen h-[500px] ">
    <HeaderProfessional/>
     <div className="flex flex-col justify-center items-center px-4">
     <div className=" md:h-[235px] mt-40">
    <div className=" md:flex gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-sm font-semibold text-[#FFFFFF]">BY</label><Link to='/user-tomas'><p className=" text-[#FFFFFF] text-xs  md:text-sm">TOMAS LAURINAVICIUS</p></Link>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-sm font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-xs md:text-sm">DESIGN PROCESS</p>
            </span>
          </div>
        <div className=" md:w-[800px]">
      <h1 className="text-white text-xl md:text-[36px] font-semibold">How to Create a PayPal Donate Button for Your WordPress Site</h1>
      <p className=" text-xs font-semibold text-white" >User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default HeroProfessional;
