import React from 'react'
import About from './About';
import Contact from './Contact';
import Dashbord from './Dashbord';
import Navbar from './navbar'
import Project from './Project'
import Footer from './footer'
import Skills from './Skills';

const Layout = () => {
  return (
    <div className='font-mono'>
        <Navbar/>
        <Dashbord/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Layout;