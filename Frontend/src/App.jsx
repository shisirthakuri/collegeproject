import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import About from './pages/About'
import Notice from './pages/Notice'
import Courses from './pages/Courses'
import ScholarShips from './pages/ScholarShips'
import ImagePage from './pages/ImagePage'
import ImageSection from './components/ImageSection'
import Contact from './pages/Contact'
const Home = lazy(()=>import( "../src/pages/Home"))
function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Suspense fallback={<div>...loading</div>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/notice" element={<Notice/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/scholarships" element={<ScholarShips/>}/>
        <Route path="/image" element={<ImagePage/>}/>
        <Route path="/imagesection" element={<ImageSection/>}/>
          <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </Suspense>
    <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
