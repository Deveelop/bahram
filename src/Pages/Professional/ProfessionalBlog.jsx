
import HeroProfessional from "./HeroProfessional"
const ProfessionalBlog = () => {
  return (
    <div className=" w-[100%] bg-[#F9F9FB]">
     <HeroProfessional/>
     <div className=" pb-20 w-[75%] m-auto flex flex-col  gap-10">
      <div>
        <div className="flex justify-between">
        <h1 className=" text-2xl font-bold">Popular</h1>
        <a>View all</a>
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
         <div className=" flex flex-col shadow-sm    rounded-md shadow-gray-500 bg-[#FFFFFF]">
          <div className=" flex flex-col p-8">
            <h1>FREELANCING</h1>
            <p>7 Best WordPress Caching Plugins for 2018</p>
          </div>
         </div>
         <div className=" bg-white place-content-center shadow-sm rounded-md shadow-gray-500">
          <div>
            <h1>FREELANCING</h1>
            <p>Kinsta Kingpin: Interview with Kevin Muldoon</p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div>
            <h1>DESIGN PROCESS</h1>
            <p>8 Ways To Leverage LinkedIn for Marketing</p>
          </div>
         </div>
         <div className=" bg-white shadow-sm rounded-md shadow-gray-500">
          <div>
            <h1>INSPIRATION</h1>
            <p>Working Remotely – Everything You Need</p>
          </div>
         </div>
        </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalBlog
