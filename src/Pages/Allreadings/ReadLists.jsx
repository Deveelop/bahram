import HeaderReadLists from "./HeaderReadLists"
import { ReadingLists } from "../../Components/readinglists" 
const ReadLists = () => {
  return (
    <>
    <HeaderReadLists/>
    <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
      <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
        <h1 className=" text-2xl font-bold">All reading lists</h1>
        <div className=" ">
            <p className=" font-semibold ">Get in-depth insights on web design, freelancing, content management, and more with these series of related reads.</p>
        </div>
     </div>
     <div className="bg-[#F9F9FB]">
     <div className=" mb-20 pt-10 w-[75%] m-auto">
     <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home</span>  —  <span className="text-[#9B9B9B]">Reading lists</span>
        </h6>
      <div className="grid md:grid-cols-2 gap-5">
        {
        ReadingLists.map( (reads) => {
          return <div key={reads.id}>
           <div className=" mt-10  grid md:grid-cols-2 gap-4">
            <img className=" w-[278px] h-[278px] rounded-md " src={reads.url} alt={reads.id}/>
            <div>
            <h1 className=" font-semibold">{reads.title}</h1>
            <p className=" leading-lose py-5">{reads.subj}</p>
            </div>
           </div>
          </div>
        })
        }
      </div>
        </div>
       
     </div>
      </div>
    </>
  )
}

export default ReadLists
