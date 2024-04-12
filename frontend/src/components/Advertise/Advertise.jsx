import React from 'react'
import Book from "/Book.png"

const Advertise = () => {
    return (
        <>
            <div className="">
                <footer className="footer p-10  flex flex-col md:flex-row items-center justify-evenly" style={{backgroundImage: 'linear-gradient(to left, oklch(84.71% 0.199 83.87 /1), white)'}}>
                    <aside className='w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0'>
                        <img src={Book} alt="book sale" className="max-w-full h-auto" />
                    </aside>
                    <aside className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center mb-2">Special Offers</h3>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">30% Discount on Physics & Chemistry Books</h1>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default Advertise