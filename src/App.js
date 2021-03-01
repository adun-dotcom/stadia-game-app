import React from 'react'
import './App.css'
import Navbar from './Components/Nav/nav'
import Advert from './Components/TopAdvert'
import Header from './Components/Heading/Header'
import Content from './Components/body/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Advert />
      <div className="container">
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
