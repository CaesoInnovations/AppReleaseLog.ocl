import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import oclogohoriz from './assets/oclogohoriz.png'
import oclogovert from './assets/oclogovert.png'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import AppReleases from './assets/pages/AppReleases'
import Dashboard from './assets/pages/Dashboard'
export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />     
          <Route path="/Sign-in" element={<SignIn/>} />
          <Route path="/Sign-Up" element={<SignUp/>} />
          <Route path="/App-Releases" element={<AppReleases/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          
          
          
      </Routes>
       
       
       
       
       
       
       
       
       
       
       
       

     </BrowserRouter>
    
  

  )
}

