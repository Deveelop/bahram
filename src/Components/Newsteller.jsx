

function Newsteller() {
  return (
   
    <div className="  md:w-[685px] h-[300px] m-auto mt-20 text-center">

    <div className=" md:w-[723px] ">
    <h1 className=" md:text-5xl font-bold text-2xl font-OpenSans">Get free web design insights...</h1>
    <p className=" font-semibold md:mt-5 text-sm md:text-xl">In your inbox, every other week. And unsubscribe in a click, if you want.</p>
    </div>

    <div className=" mt-10 md:mt-16">
      <form className="flex justify-center">
      <input className=" md:w-[423px] h-[70px] rounded-[35px] bg-[#FFFFFF] focus:border-transparent focus:outline-none focus:shadow-lg  placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1 shadow-sm shadow-gray-500 " placeholder="Your email"/>
      <button className=" md:w-[200px] h-[70px] p-4 rounded-full md:rounded-[35px] bg-[#FF5480] text-white font-semibold md:text-2xl -ml-16 shadow-sm shadow-gray-500">Subscribe</button>
      </form>
    </div>

   </div>
  
  )
}

export default Newsteller;
