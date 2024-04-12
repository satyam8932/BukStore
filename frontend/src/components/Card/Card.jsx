import React from 'react'


const Card = ({ item }) => {

    return (
        <>
            <div className="max-w-sm bg-base-100 shadow-xl hover:scale-105 duration-200 rounded-lg overflow-hidden md:max-w-md lg:max-w-2xl m-5">
                <figure><img src={item.image} alt={item.name} /></figure>
                <div className="card-body px-4 py-3">
                    <h2 className="card-title text-xl font-bold">
                        {item.name}
                        <div className="badge badge-warning ml-2">{item.category}</div>
                    </h2>
                    <p className="text-base mb-2">{item.description}</p>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-outline hover:text-warning duration-200 p-4 text-sm">{item.price}</div>
                        <div className="badge badge-outline hover:text-warning duration-200 p-4 text-sm cursor-pointer">{item.category}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card