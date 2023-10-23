import React from "react";
import "../styles/contents.scss"
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";


function Contents() {

    return (
        <div className="contents">
            <Home />
            <About />
            <Work />
            <Contact />
        </div>
    )

}

export default Contents;        