import HeaderNew from "./HeaderNew"
import Newsteller from "../../Components/Newsteller"
import { NewPostsArray } from "../../Components/newpostarray"
import { AllTopicsArray } from "../../Components/alltopicsarray"

const New = () => {
  return (
    <>
      <HeaderNew/>
      <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
      <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
        <h1 className=" text-2xl font-bold">New</h1>
        <div className=" ">
            <p className=" font-semibold ">Our latest web design tips, tricks, insights, and resources, hot off the presses.</p>
        </div>
     </div>
     <div className="bg-[#F9F9FB]">
     <div className=" pt-10 w-[75%] m-auto">
     <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home</span>  —  <span className="text-[#9B9B9B]">New</span>
        </h6>
        <div className="grid md:grid-cols-2 gap-5">
        {
      NewPostsArray.map( (posts) => {
        return <div className="" key={posts.id}>
          <div className=" mt-10">
          <img className=" rounded-lg" src={posts.url} alt={posts.id}/>
          </div>
          <div className=" flex gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-sm font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-sm  md:text-sm">{posts.author}</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-sm font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-sm md:text-sm">{posts.category}</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">{posts.title}</h1>
          </div>
          <p className="text-[#9B9B9B] text-xs">{posts.subj}</p>
        </div>
      })
     }
     </div>
     <div className=" mt-20">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {
         AllTopicsArray.map((lists) => {
         return <div className=" h-[146px] shadow-lg rounded-md bg-[#FFFFFF]" key={lists.id}>
          <div className=" items-center place-content-center w-full h-full flex">
            <img className="h-[23px]" src={lists.icon} alt={lists.id}/>
            <h1 className="pl-4">{lists.topic}</h1>
          </div>
         </div>
         })
        }
       </div>
     </div>
     <div className=" mt-20">
       <button className="  m-auto w-[200px] h-[70px] border-[2px] border-[#FF5480] flex justify-center items-center rounded-[35px] text-[#FF5480] font-semibold text-2xl ">Load More</button>
     </div>
     </div>
     <Newsteller/>
     </div>
      </div>
    </>
  )
}

export default New
