import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner';
import Advertise from '../components/Advertise/Advertise';
import Freebooks from '../components/Freebooks/Freebooks';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Advertise />
            <Freebooks />
            <Footer />
        </>
    )
}

export default Home