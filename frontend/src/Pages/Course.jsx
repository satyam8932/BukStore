import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Paidbooks from '../components/Paidbooks/Paidbooks'

const Course = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Paidbooks />
        <Footer />
      </div>
    </>
  )
}

export default Course