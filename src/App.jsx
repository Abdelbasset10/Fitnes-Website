import React from 'react'
import './App.css'
import Hero from './components/hero-sec/Hero'
import Programs from './components/programs/Programs'
import Reasons from './components/reasons/Reasons'
import Plans from './components/plans/Plans'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='App' >
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials / >
      <Contact />
      <Footer / >
    </div>
  )
}

export default App
