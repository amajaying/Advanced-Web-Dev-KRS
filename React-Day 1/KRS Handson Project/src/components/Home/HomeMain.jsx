import React from "react";
import { Link } from "react-router-dom";

function HomeMain(){
    return(
        <div className="w-[900px] flex flex-col justify-center items-center pt-16">
            <button className="bg-gray-200 rounded-full px-4 py-2 ">
                Check our most recent podcast &#62; 
            </button>
            <br/>
            <h1 className="text-6xl font-bold text-center">The Free Community for<br />Modern Learning.</h1>
            <br />
            <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt debitis omnis, maiores magnam dolor deleniti rem ea itaque tempora assumenda nihil culpa! Ad, fugiat?</p>
            <br />
            <div className="text-lg">
                <button className="bg-blue-500 px-6 py-2 mx-2 rounded-md">
                    <Link to="/login" className="text-white">See Courses</Link>
                </button>
                <button className="px-6 py-2 mx-2 rounded-md border-[1px] border-black">
                    <Link to="/register">Visit Youtube</Link>
                </button>
            </div>
        </div>
    );
}

export default HomeMain;