import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import Navbar from './Component/Navbar'
import Contact from './Pages/Contact'
import Quotes from './Pages/Quotes'

const App = () => {
  return (
    <div>
      <div className='mb-20'>
          <Navbar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/get-quote' element={<Quotes/>} />
      </Routes>
    </div>
  )
}

export default App