import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './../Card/Card';
import apiURL from '../../config/apiURL';

const Paidbooks = () => {
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

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            {/* Headings */}
            <div className="mt-28 items-center justify-center text-center">
                <div>
                    <h1 className='text-2xl font-semibold md:text-4xl'>Want to read some more <span className="text-warning">books?</span></h1>
                    <h3 className='font-light my-5'>Try our paid books from world class best writers only for you at a feasible price</h3>
                </div>
            </div>
            {/* Card */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-3'>
                {book.map((item) => (
                    <div key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paidbooks;
