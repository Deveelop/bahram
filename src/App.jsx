
import Footer from "./Components/Footer"
import Posts from "./Pages/Personal/Posts"
import Porpular from "./Pages/Porpular/Porpular"
import New from "./Pages/New/New"
import ReadLists from "./Pages/Allreadings/ReadLists"
import Topics from "./Pages/Topics/Topics"
import PostsPage from "./Pages/Posts/PostsPage"
import TomasLau from "./Pages/Users/TomasLau"
import FreelanceBlog from "./Pages/Freelance/FreelanceBlog"
import ProfessionalBlog from "./Pages/Professional/ProfessionalBlog"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import BusinessBlog from "./Pages/Business/BusinessBlog"
const App = () => {
  return (
    <>
   <BrowserRouter>
     
      <Routes>
      <Route exact path="/" element={<Posts/>}/>
      <Route exact path="/porpular" element={<Porpular/>}/>
      <Route exact path="/new" element={<New/>}/>
      <Route exact path="/reading-lists" element={<ReadLists/>}/>
      <Route exact path="/topics" element={<Topics/>}/>
      <Route exact path="/posts-page" element={<PostsPage/>}/>
      <Route exact path="/user-tomas" element={<TomasLau/>}/>
      <Route exact path="/freelance-blog" element={<FreelanceBlog/>}/>
      <Route exact path="/professional-blog" element={<ProfessionalBlog/>}/>
      <Route exact path="/business-blog" element={<BusinessBlog/>}/>
      </Routes>
    
      <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
