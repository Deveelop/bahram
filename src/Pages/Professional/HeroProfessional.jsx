import HeaderProfessional from "./HeaderProfessional";
import { Link } from "react-router-dom";
const HeroProfessional = () => {
  return (
    <>
    <div className="bg-[url('/Pic.png')] bg-cover bg-no-repeat bg-center h-screen ">
    <HeaderProfessional/>
     <div className="flex flex-col justify-center items-center">
     <div className=" h-[235px] mt-40">
    <div className=" flex gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-sm font-semibold text-[#FFFFFF]">BY</label><Link to='/user-tomas'><p className=" text-[#FFFFFF] text-sm  md:text-sm">TOMAS LAURINAVICIUS</p></Link>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-sm font-semibold text-[#FFFFFF]"> IN</label><p className=" text-[#FFFFFF] text-sm md:text-sm">DESIGN PROCESS</p>
            </span>
          </div>
        <div className=" w-[800px]">
      <h1 className="text-white text-[36px] font-semibold">How to Create a PayPal Donate Button for Your WordPress Site</h1>
      <p className=" font-semibold text-white" >User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default HeroProfessional;
