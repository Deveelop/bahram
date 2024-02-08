import { PostsArray } from "./postsarray"

const Posts = () => {
  return (
    <div className=" bg-[#F9F9FB]  flex flex-col">
     {
      PostsArray.map( (posts) => {
        return <div className=" md:p-40 m-auto mt" key={posts.id}>
          <div>
          <img className=" rounded-lg" src={posts.url} alt={posts.id}/>
          </div>
          <div className=" flex gap-10 py-5 ">
            <span className=" flex gap-3">
              <label className=" text-lg font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-lg">{posts.author}</p>
            </span>
            <span className="flex gap-3">
              <label className=" text-lg font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-lg">{posts.category}</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-5xl">{posts.title}</h1>
          </div>
        </div>
      })
     }
     <div className=" mt-20">
       <button className="  m-auto w-[200px] h-[70px] border-[2px] border-[#FF5480] flex justify-center items-center rounded-[35px] text-[#FF5480] font-semibold text-2xl ">Load More</button>
     </div>

     <div className="w-[685px] h-[232px] top-[4121px] left-[707px]">

      <div>
      <h1 className=" text-5xl">Get free web design insights...</h1>
      <p>In your inbox, every other week. And unsubscribe in a click, if you want.</p>
      </div>

      <div>
        <input placeholder="your email"/>
        <button>Subscribe</button>
      </div>

     </div>
    
    </div>
  )
}

export default Posts