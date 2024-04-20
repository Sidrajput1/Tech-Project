
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Pages/Navbar'
import Home from './components/Pages/Home'
import MainHome from './components/Pages/MainHome'
import Footer from './components/Pages/Footer'
import AboutUs from './components/Pages/AboutUs'
import ContactPage from './components/Pages/ContactPage'
import Service from './components/Pages/Service'

function App() {
  
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<MainHome/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<ContactPage/>}></Route>
      <Route path='/service' element={<Service/>}></Route>

    </Routes>
    
      <Footer />
    </>
  )
}

export default App
