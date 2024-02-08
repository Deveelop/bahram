import { PostsArray } from "./postsarray"


const Posts = () => {
  return (
    <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
     {
      PostsArray.map( (posts) => {
        return <div className=" w-[75%]  m-auto" key={posts.id}>
          <div className=" mt-10">
          <img className=" rounded-lg" src={posts.url} alt={posts.id}/>
          </div>
          <div className=" flex gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-lg font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-sm  md:text-lg">{posts.author}</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-sm md:text-lg font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-sm md:text-lg">{posts.category}</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">{posts.title}</h1>
          </div>
        </div>
      })
     }
     <div className=" mt-20">
       <button className="  m-auto w-[200px] h-[70px] border-[2px] border-[#FF5480] flex justify-center items-center rounded-[35px] text-[#FF5480] font-semibold text-2xl ">Load More</button>
     </div>

     <div className=" md:w-[685px] h-[300px] m-auto mt-20 text-center">

      <div className=" md:w-[723px] ">
      <h1 className=" md:text-5xl font-bold text-2xl font-OpenSans">Get free web design insights...</h1>
      <p className=" font-semibold md:mt-5 md:text-xl">In your inbox, every other week. And unsubscribe in a click, if you want.</p>
      </div>

      <div className=" mt-10 md:mt-16">
        <form className="flex justify-center">
        <input className=" md:w-[423px] h-[70px] rounded-[35px] bg-[#FFFFFF] focus:border-transparent focus:outline-none focus:shadow-lg  placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1 shadow " placeholder="Your email"/>
        <button className=" md:w-[200px] h-[70px] p-4 rounded-full md:rounded-[35px] bg-[#FF5480] text-white font-semibold md:text-2xl -ml-16 shadow">Subscribe</button>
        </form>
      </div>

     </div>
     
    
    </div>
  )
}

export default Posts