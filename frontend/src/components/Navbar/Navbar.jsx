import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { toast } from 'react-hot-toast';

const Navbar = () => {

    // Check Logged In State using context API
    const [authUser, setAuthUser] = useAuth();

    const navItems = (
        <>
            <li className="hover:text-warning">
                <Link to="/">Home</Link>
            </li>
            <li className="hover:text-warning">
                <Link to="/course">Course</Link>
            </li>
            <li className="hover:text-warning">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-warning">
                <Link to="/about">About</Link>
            </li>
        </>
    );
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 navbar fixed top-0 left-0 right-0 bg-base-100 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold cursor-pointer text-warning">
                        <Link to="/">BukStore!</Link>
                    </a>
                </div>
                <div className="navbar-end space-x-3">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navItems}</ul>
                    </div>
                    <div className="hidden md:block w-1/5">
                        <h2 className="font-semibold">{authUser ? `${String(authUser.name).toUpperCase()}` : ''}</h2>
                    </div>
                    <a className="bg-warning text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
                        {authUser ? (
                            <button onClick={() => {
                                setAuthUser({ user: null }); // Resetting the authUser state
                                localStorage.removeItem('Users'); // Removing user data from localStorage
                                toast('Logout Success')
                                setTimeout(() => {
                                    window.location.reload();
                                  },3000)
                            }}>Logout</button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
