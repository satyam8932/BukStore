import React from 'react'
import Slider from "react-slick";
import Card from '../Card/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import { useState, useEffect } from 'react';
import apiURL from '../../config/apiURL';

const Freebooks = () => {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/api/v1/book`);
                setBook(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Filter the data to only show free books
    
    const filterData = book.filter((data) => data.category === 'Free');

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 m-10">
                <h1 className='font-bold text-2xl pb-2 text-center'>Books You Can Explore For Free</h1>
                <hr />
                <div className="slider my-10">
                    <Slider {...settings}>
                        {filterData.map((item) =>(
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebooks