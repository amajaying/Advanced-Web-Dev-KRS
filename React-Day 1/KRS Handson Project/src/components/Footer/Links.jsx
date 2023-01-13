import React from "react";
import { Link } from "react-router-dom";

function Links(){
    return(
        <div className="flex space-x-24">
            <div>
                <h1 className="text-2xl font-semibold">Sitemap</h1>
                <Link to="/" className="text-lg">Home</Link>
                <br/>
                <Link to="/courses" className="text-lg">Courses</Link>
                <br/>
                <Link to="/contact" className="text-lg">Contact Us</Link>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Contact Us</h1>
                <a href="" className="text-lg">Email</a>
                <br/>
                <a href="" className="text-lg">Youtube</a>
                <br/>
                <a href="/contact" className="text-lg">Instagram</a>
                <br/>
                <a href="/contact" className="text-lg">Facebook</a>

            </div>
        </div>
    )
}

export default Links;