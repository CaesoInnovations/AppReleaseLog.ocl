import React from 'react'
import oclogohoriz from './assets/oclogohoriz.png'
import oclogovert from './assets/oclogovert.png'
export default function App() {
  return (
    <div>
       
          <a href="/Users/oortcloudenzo/Desktop/MERN-OCUpdateBlog/OCVersionUpdateBlog/src/assets/oclogohoriz.png" 
          target="_blank" ><img src={oclogohoriz} className="CompanyLogo" alt="OcLogo"/>
          </a>
          <a href="/Users/oortcloudenzo/Desktop/MERN-OCUpdateBlog/OCVersionUpdateBlog/src/assets/oclogovert.png"
          target="_blank"><img src={oclogovert} className="CommLogo" alt="CommercialLogo"/></a>
          <h1 className='text-3xl text-blue-500'>OortCloud Lendsoft® </h1>
      </div>
    

  )
}

