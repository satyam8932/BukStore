import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {

  // Form Validation using React Hook Form 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 md:mt-72">
        <h1 className="flex justify-center text-center mb-10 font-bold text-4xl">Contact</h1>
        <section className="align-center flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/2 max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })} 
              />
              {errors.email && <span className="text-xs text-red-500">*This field is required</span>}
              <textarea
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="text"
                placeholder="Description"
                {...register("text", { required: true })}
              />
              {errors.text && <span className="text-xs text-red-500">*This field is required</span>}
              <div className="text-center md:text-left">
                <button
                  className="mt-4 bg-warning hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;