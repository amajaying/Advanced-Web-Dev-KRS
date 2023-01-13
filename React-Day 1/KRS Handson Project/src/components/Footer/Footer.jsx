import React from "react";
import Title from "./Title";
import Links from "./Links";

function Footer(){
    return (
        <div>
            <div className="pt-24 flex justify-center pb-16">
                <div className="w-[85%]">
                    <hr className="h-1 bg-blue-400" />
                    <div className="flex justify-between mt-8">
                        
                        <div>
                            <Title />
                        </div>
                        <div>
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;