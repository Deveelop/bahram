
import Footer from "./Components/Footer"
import Posts from "./Pages/Personal/Posts"
import Porpular from "./Pages/Porpular/Porpular"
import New from "./Pages/New/New"
import ReadLists from "./Pages/Allreadings/ReadLists"
import Topics from "./Pages/Topics/Topics"
import PostsPage from "./Pages/Posts/PostsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
      </Routes>
    
      <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
