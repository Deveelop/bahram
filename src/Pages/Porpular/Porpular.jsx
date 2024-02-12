import HeaderPorpular from "./HeaderPorpular"
import Newsteller from "../../Components/Newsteller"
import { Popularposts } from "../../Components/popularpost"
import { ReadingLists } from "../../Components/readinglists"
function Porpular() {
  return (
    <>
      <HeaderPorpular/>
     <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
     <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
        <h1 className=" text-2xl font-bold">Reading lists</h1>
        <div className=" md:flex gap-10 items-center">
         
            <img className=" rounded-md" src="/chap6.png" alt="alt"/>
           
            <div>
            <h1 className="font-bold text-[24px]">Popular</h1>
            <p className=" ">Check out the most-read and most-shared posts from the 3layers blog.</p>
            </div>
        </div>
     </div>
     <div className="bg-[#F9F9FB]">
      <div className=" pt-10 w-[75%] m-auto">
        <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home  —  Reading lists</span>  —  <span className="text-[#9B9B9B]">Popular</span>
        </h6>
        <div>
        {
         Popularposts.map((lists) => {
          return <div className=" grid md:mb-10" key={lists.serialNo}>
           

              <div className="bg-[#FFFFFF] shadow-md items-center grid md:grid-cols-2 rounded-lg">
                <div className=" md:pl-10">
              <h1 className=" font-normal">{lists.serialNo}</h1>
              <h1 className=" font-semibold md:text-[28px]">{lists.title}</h1>
              <p className="text-[#9B9B9B] text-xs">{lists.subj}</p>
             </div>

             
                <img className=" h-[100%] rounded-b-lg :rounded-r-lg" src={lists.url} alt={lists.serialNo}/>
              
              </div>
           
          </div>
         })
        }
        </div>
        <div>
          <div className=" flex justify-between">
            <h1 className=" text-2xl font-bold">Reading lists</h1>
            <a href="#" className=" text-[#FF5480]">View all</a>
          </div>
          <div>{
          ReadingLists.map((reads)=>{
           return <div key={reads.id} className=" ">
           
              <div className="grid grid-cols-4">
               <img className="" src={reads.url} alt={reads.id}/>
              <h1>{reads.title}</h1>
              </div>
              </div>
          
          
          })
          }</div>
        </div>
      </div>
      <Newsteller/>
      </div>

     </div>
    </>
  )
}

export default Porpular


