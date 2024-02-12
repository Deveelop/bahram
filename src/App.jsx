
import Footer from "./Components/Footer"
import Posts from "./Pages/Personal/Posts"
import Porpular from "./Pages/Porpular/Porpular"
import New from "./Pages/New/New"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
   <BrowserRouter>
     
      <Routes>
      <Route exact path="/" element={<Posts/>}/>
      <Route exact path="/porpular" element={<Porpular/>}/>
      <Route exact path="/new" element={<New/>}/>
      </Routes>
    
      <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
