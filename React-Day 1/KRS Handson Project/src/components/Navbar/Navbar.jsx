import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="flex w-full justify-between items-center p-4 fixed bg-white">
            <div className="w-40">
                <img src="https://krs.kiit.ac.in/assets/KRS.b5e08628.png" 
                alt="KRS-Logo" 
                className="w-12 h-12"/>
            </div>
            <div className="text-lg">
                <Link to="/" className="px-2">Home</Link>
                <Link to="/courses" className="px-2">Courses</Link>
                <Link to="/contact" className="px-2">Contact Us</Link>
            </div>
            <div className="text-lg">
                <button className="bg-blue-500 px-4 py-1 mx-2 rounded-md">
                    <Link to="/login" className="text-white">Login</Link>
                </button>
                <button className="px-4 py-1 mx-2 rounded-md border-[1px] border-black">
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar;