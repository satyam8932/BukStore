import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from './../components/Footer/Footer';

const About = () => {
  return (
    <>
        <Navbar />
        <div className="dark:bg-gray-900 dark:text-white h-screen">
            <h1>About Us</h1>
        </div>
        <Footer />
    </>
  )
}

export default About