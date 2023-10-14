import React from 'react'
import Outerbox from './Outerbox'
import Services from './Services'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-fit w-screen'>
    <Outerbox/>
    <Services/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Home