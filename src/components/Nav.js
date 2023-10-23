import React, { useEffect, useState } from "react";
import "../styles/nav.scss"
function Nav() {


    useEffect(() => {
        window.addEventListener('scroll', () => {

            const scrollPosition = window.scrollY;
            let nav = document.querySelector(".nav")
            if (scrollPosition > 10) {
                nav.classList.add("on");
            } else {
                nav.classList.remove("on");
            }
        });

        // Clean up the event listener on unmount

    }, []);

    return (
        <div className="nav">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}


export default Nav;