import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './components/common/NavBar'
const Home = lazy(()=>import( "../src/pages/Home"))
function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Suspense fallback={<div>...loading</div>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Suspense>
      </BrowserRouter>
      
    </>
  )
}

export default App
