import React from 'react'
import './App.css'
import Navbar from './Components/Nav/Nav'
import Advert from './Components/TopNav'

import Content from './Components/Body/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Advert />
      <div className="container">
        <Navbar />
        
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
