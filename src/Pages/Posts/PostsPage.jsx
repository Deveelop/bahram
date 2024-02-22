import HeaderPosts from "./HeaderPosts"
import { FaEye, FaHeart} from 'react-icons/fa'

const PostsPage = () => {
  return (
    <>
     <HeaderPosts/>
     <div className=" w-[100%] mt-20   flex flex-col font-OpenSans">
      <div className=" pb-20 w-[75%] m-auto flex flex-col bg-[#FFFFFF] gap-10">
        <h1 className=" md:text-2xl font-bold">10 Reasons to Build Your Website with WP Page Builder</h1>
        <div className=" ">
            <p className=" font-semibold text-xs ">People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).</p>
        </div>
        <div className=" md:flex gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-sm font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-sm">TOMAS LAURINAVICUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-sm font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-sm">DESIGN PROCESS</p>
            </span>
          </div>
     </div>
     <div className="bg-[#F9F9FB]">
     <div className=" mb-20 pt-5 w-[75%] m-auto">
     <h6 className=" text-xs"> <span className="text-[#C8C8C8]">Home  —  Reading lists - UX Design</span>  —  <span className="text-[#9B9B9B]">10 Reasons to Build Your Website with WP Page Builder</span>
        </h6>

    <div className=" mt-10">
        <div className=" md:flex justify-between">
            <div className=" flex justify-center md:block gap-2">
            
         <div className=" pb-4"><a className="" href="http://"> <img src="/Pinterest.png"/> </a> </div>
         <div className=" pb-4">  <a className="" href="http://" > <img src="/Instagram.png"/> </a></div>
         <div className=" pb-4">  <a className="" href="http://" > <img src="/Twitter.png"/> </a></div>
         <div className=" pb-4">  <a className=" " href="http://" > <img src="/Facebook.png"/> </a>    </div>
            </div>

            <div className=" md:px-4">
                <img className="  rounded-lg" src="/better.png" alt="najjjjjj"/>
            </div>

          <div className=" mt-5 justify-center flex md:block gap-4">
           <div className=" md:grid pb-4">
           <FaHeart className=" text-[#FF5480]" />
            <p>12K</p>
           </div>
           <div className="md:grid">
           <FaEye />
            <p>25K</p>
           </div>
          </div>
        </div>
        
      <div className=" md:p-8">
        <p className=" text-sm md:text-lg">People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one,<span> <a className=" text-[#27AEFF]" href="#">WP Page Builder</a></span> .If you’re tired of the same old page builder plugins, this is one you should try out.</p>
      </div>

      <div className=" md:p-8">
        <h1 className=" font-semibold py-4">What’s Special About WP Page Builder?</h1>
        <p className=" text-sm md:text-lg">Wondering what makes WP Page Builder so special? I would say, what doesn’t? It’s developed by the team over at Themeum, who has been creating <span> <a className=" text-[#27AEFF]" href="#">WordPress themes</a> </span> since 2013. As mentioned above, the plugin is a full pack of essential site building elements with all modern the modern functionality you’ve come to expect from a page builder plugin. Let’s have a look below at all of the juicy features WP Page Builder includes.</p>
      </div>

      <div className=" md:p-8">
        <img className="  rounded-lg" src="/better2.png" alt="stsdss"/>
      </div>

      <div className=" md:p-8">
        <div className=" ">
        <p className="py-4">Here are some of the amazing add-ons included:</p>
	<p  className="py-4 text-sm md:text-lg"><span className=" font-semibold py-4"> •	Form:</span> Create web forms effortlessly. It gives you a convenient way to style your forms as you desire. The Form add-on itself is capable of setting up any kind of form without needing to install any plugin. Moreover, you can manage form plugins and enable reCAPTCHA with just a simple click. There is also an add-on for Contact Form 7 if you prefer.</p>
	<p  className="py-4 text-sm md:text-lg"> <span  className=" font-semibold">•	Carousel:</span> It’s hard to find an advanced add-on like a carousel in a free page builder plugin, but WP Page Builder lets you create stunning hero sliders without having to pay for it.</p>
	<p  className="py-4 text-sm md:text-lg"> <span  className=" font-semibold"> •	Post Grid:</span> Display blog posts in grids defining the number of posts and styling the look.</p>
	<p  className="py-4 text-sm md:text-lg"> <span  className=" font-semibold"> •	Feature Box:</span> Use the Feature Box add-on to display the features of products on your website.</p>
	<p  className="py-4 text-sm md:text-lg"> <span  className=" font-semibold"> •	Accordion:</span> Need any collapse text content on your site? Use WP Page Builder’s Accordion add-on and modify the style the way you want.</p>
  
        </div>
      </div>
      <div className=" md:p-8">
      <div className=" flex flex-col">
        <div className=" grid md:grid-cols-2 gap-4">
          <img className=" rounded-md" src="/slide1.png" alt="slide"/>
          <img className=" rounded-md" src="/slide2.png" alt="slide"/>
        </div>
        <div className=" p-4 items-center flex justify-center">
        <p className=" text-[#9283E0] text-center w-[80%] ">“ WP Page Builder offers a lot of ready-to-use design blocks to make your site development process a lot faster and easier “</p>
      </div>
        <div className=" flex flex-col items-center">
        <img  className=' w-[40px] rounded-[50px]' src="/profile1.png" alt="profile" />
        <h1 className=" text-xs md:text-sm">TOMAS LAURINAVICIUS</h1>
        <span className=" flex items-center gap-2">
        <span className=" text-xs md:text-sm">Follow me</span> <span className=" text-xs md:text-sm text-[#27AEFF]"><a  href="#"> @JohnAMWill.</a></span>
        </span>
        </div>

      </div>
      </div>

     <div className=" mt-5 md:p-8">
      <div className=" flex justify-between">
      <h1 className=" font-semibold text-xs md:text-sm">You might also like...</h1>
      <a className=" text-[#9B9B9B] text-xs md:text-sm" href="#">More</a>
      </div>
      <div className=" md:grid md:grid-cols-2 gap-3">
          <div>
          <div className=" mt-10">
          <img className=" rounded-lg" src='/dsb1.png' alt='posts'/>
          </div>
          <div className=" md:flex gap-5 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-xs">TOMAS LAURINAVICUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">Web page layout 101: website anatomy every designer needs to learn</h1>
          </div>
          <p className="text-[#9B9B9B] py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
          <div>
          <div className=" mt-10">
          <img className=" rounded-lg" src='/dsb2.png' alt='posts'/>
          </div>
          <div className=" md:flex gap-5 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-xs">TOMAS LAURINAVICUS</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-1">
              <label className=" text-xs md:text-xs font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-xs">DESIGN PROCESS</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">Web page layout 101: website anatomy every designer needs to learn</h1>
          </div>
          <p className="text-[#9B9B9B] py-4 text-xs">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
        </div>
        </div>
     </div>
     
      

    </div>





        </div>

        <div className=" border-b  border-gray-200 w-[60%] m-auto mb-20 mt-10">

          <div>
            <div className="flex justify-between gap-5 pb-10 items-center">
              <h1 className=" font-semibold">Comments</h1>
              <div>
              <button className="  md:w-[150px] md:h-[50px] rounded-lg font-semibold border border-[#FF5480] text-[#FF5480]">Leave a Comment</button>
              </div>
            </div>
            <p className=" text-sm md:text-lg" ><span className=" font-semibold">Comment policy:</span> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.</p>
          </div>

       

          <div className=" mt-20">
          <div className=''>
          <div className=' md:flex justify-between '>
            <div className=" md:flex gap-5 ">
          <img className=' w-[50px] h-[50px] rounded-[50px]' src='/profile2.png' alt='profile'/>
          <h1 className="">Brian Jackson</h1>
          </div>
          <div>
          <h1 className=" text-[#9B9B9B] text-nowrap">December 14, 2017 at 5:13 pm</h1>
          </div>
          <div className="">
          <button className=" text-[#9B9B9B] border h-[51px] w-[90px] rounded-lg">Reply</button>
          </div>
          </div>
          <div className=' mt-5'>
        <p className=' md:ml-14'>I think, you forgot to mention a very good one:
Thrive architect from thrivethemes. That thing is pretty powerful.</p>
          </div>
        </div>
           </div>

          <div className=" w-[85%] m-auto pb-10">
          <div className=' mt-10'>
          <div className=' md:flex justify-between '>
            <div className=" md:flex gap-5 ">
          <img className=' w-[50px] rounded-[50px]' src='/profile3.png' alt='profile'/>
          <h1 className="">Sean Scott</h1>
          </div>
          <div>
          <h1 className=" text-[#9B9B9B] text-nowrap">December 14, 2017 at 5:13 pm</h1>
          </div>
          <div className="">
          
          </div>
          </div>
          <div className=' mt-5'>
        <p className=' md:ml-14'> Thanks Brian! We have updated the above post. You are correct, their page builder has both a free and a premium version.</p>
          </div>
        </div>
        </div>

       

        </div>
        <div className=" border-b  border-gray-200 w-[60%] m-auto mb-20 mt-10">
        <div className="pb-10">
        <div className=''>
          <div className=' md:flex justify-between '>
            <div className=" md:flex gap-5 ">
          <img className=' w-[50px] h-[50px] rounded-[50px]' src='/profile4.png' alt='profile'/>
          <h1 className="">Wiliam Hilton</h1>
          </div>
          <div>
          <h1 className=" text-nowrap text-[#9B9B9B]">December 14, 2017 at 5:13 pm</h1>
          </div>
          <div className="">
          <button className=" text-[#9B9B9B] border h-[51px] w-[90px] rounded-lg">Reply</button>
          </div>
          </div>
          <div className=' mt-5'>
        <p className=' md:ml-14'>I think, you forgot to mention a very good one:
Thrive architect from thrivethemes. That thing is pretty powerful.</p>
          </div>
        </div>
           </div>
        </div>

        <div className=" p-8 flex justify-center pb-20" >
          <div className=" bg-[#FFFFFF] p-4 md:w-[772px] md:h-[772px] rounded-lg shadow-sm  shadow-gray-500">
            <div className=" items-center place-content-center w-full h-full flex">
            <form className=" flex flex-col ">
            <label className=" font-semibold mb-5">Leave a Reply</label>
            <div className="py-4  md:w-[523px] h-[196px] border-2 border-gray-200 rounded-lg">
            <textarea className=" border-none focus:outline-none w-full h-full placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1  " placeholder="Comment" type="comment"/>
            </div>
            <div className="py-4">
            <input className=" focus:outline-none md:w-[523px] md:h-[70px] border-2 rounded-lg border-gray-200 placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1" placeholder="Name" type="name"/>
            </div>
            <div className="py-4" >
            <input className=" focus:outline-none md:w-[523px] md:h-[70px] border-2 rounded-lg border-gray-200 placeholder:font-OpenSans placeholder:text-base pl-6 placeholder:pl-1" placeholder="Email" type="email"/>
            </div>
            <div className="flex py-4">
            <input type="checkbox" />
            <p className="pl-2">I agree to the <span><a className=" text-[#27AEFF]" href="#">Terms and Conditions</a></span> and <span><a className=" text-[#27AEFF]" href="#">Privacy Policy</a></span></p>
            </div>
            <div className="py-4">
            <button className=" bg-[#FF5480] md:h-[70px] h-[40px] text-white rounded-[35px] w-[150px] md:w-[227px]">Post Comment</button>
            </div>
            </form>
            </div>
          </div>
        </div>
        
        </div>
     </div> 
    </>
  )
}

export default PostsPage;
