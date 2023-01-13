import React from "react";
import HomeMain from "./HomeMain.jsx";
import About from "./About.jsx";
import Career from "./Career.jsx";

function Home(){
   return(
    <div className="pt-24">
        <div className="flex justify-center items-center">
        <HomeMain />
        </div>
        <About/>
        <Career/>
    </div>
   )
}

export default Home;