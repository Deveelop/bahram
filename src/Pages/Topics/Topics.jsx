import HeaderTopic from "./HeaderTopic"
import { AllTopicsArray } from "../../Components/alltopicsarray"
const Topics = () => {
  return (
    <>
      <HeaderTopic/>
      <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
      <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
        <h1 className=" text-2xl font-bold">Topics</h1>
        <div className=" ">
            <p className=" font-semibold ">Find everything from design inspiration to best practices, freelancing tips to tools.</p>
        </div>
     </div>
     <div className="bg-[#F9F9FB]">
     <div className=" mb-20 pt-10 w-[75%] m-auto">
     <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home</span>  —  <span className="text-[#9B9B9B]">Topics</span>
        </h6>
        <div className=" mt-20">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {
         AllTopicsArray.map((lists) => {
         return <div key={lists.id}>
            <div className="  flex flex-col shadow-sm  h-[250px]  rounded-md shadow-gray-500 bg-[#FFFFFF]">
               <div className=" flex flex-col p-8">
                <div className=" flex p-4">
             <img src={lists.icon} alt={lists.id}/>
             <h1 className=" pl-2 md:pl-4 font-semibold">{lists.topic}</h1>
             </div>
             <div className="">
                <p>{lists.subj}</p>
             </div>
             </div>
            </div>
            </div>
         })
        }
       </div>
     </div>
        
        </div>
     </div>
     </div>
    </>
  )
}

export default Topics
