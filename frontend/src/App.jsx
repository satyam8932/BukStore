import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {

  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Course /> : <Navigate to="/login" /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App