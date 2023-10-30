import React, { useEffect, useRef, useState } from "react";
import { FaHome, FaUserAlt, FaPhone, FaAlignJustify, FaChartBar } from "react-icons/fa";
import "../styles/nav.scss"
import { useNavigate } from 'react-router-dom';

function Nav({ checkHome }) {

    const navigate = useNavigate();
    const liRef = useRef(null);
    const iconRef = useRef(null);
    const [iconClick, setIconClick] = useState(false)
    const [hamClick, setHamClick] = useState(false);


    useEffect(() => {

        // iconRef.current = document.querySelector(".icon");
        liRef.current = document.querySelectorAll(".nav_items>li");

    }, [])

    const iconOnClick = () => {
        setIconClick((prev) => !prev);
        setHamClick((prev) => !prev);
    }

    const onClick = (page) => {
        navigate(`/${page}`);
    }

    const onHamClick = (page) => {
        navigate(`/${page}`);
        setIconClick((prev) => !prev);
        setHamClick((prev) => !prev);
    }


    const onMouseEnter = (num) => {

        const navArray = Array.from(liRef.current);

        liRef.current.forEach((item, idx) => {
            item.classList.remove("on");
        })

        navArray[num].classList.add("on");


    }

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const scrollPosition = window.scrollY;
    //         let nav = document.querySelector(".nav")
    //         if (scrollPosition > 10) {
    //             nav.classList.add("on");
    //         } else {
    //             nav.classList.remove("on");
    //         }
    //     });
    // }, []);

    return (
        <>
            <div className={`${checkHome ? 'nav' : 'noNav'}`}>
                <ul className="nav_items" onMouseLeave={() => {
                    liRef.current.forEach((item, idx) => {
                        item.classList.remove("on");
                    })
                }
                }>
                    <li onClick={() => onClick("")} onMouseEnter={() => onMouseEnter(0)} >home<FaHome /></li>
                    <li onClick={() => onClick("about")} onMouseEnter={() => onMouseEnter(1)}>about<FaUserAlt /></li>
                    <li onClick={() => onClick("skill")} onMouseEnter={() => onMouseEnter(2)}>Skill<FaChartBar /></li>
                    <li onClick={() => onClick("work")} onMouseEnter={() => onMouseEnter(3)}>work<FaAlignJustify /></li>
                    <li onClick={() => onClick("contact")} onMouseEnter={() => onMouseEnter(4)}>contact<FaPhone /></li>
                </ul>

                <div onClick={iconOnClick} className={`icon nav-icon-5 ${iconClick ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


            </div>
            <div className={`hamMenu ${hamClick ? 'on' : ''}`}>
                <ul>
                    <li onClick={() => onHamClick("")}><span></span><h3>home</h3></li>
                    <li onClick={() => onHamClick("about")}><span></span><h3>about</h3></li>
                    <li onClick={() => onHamClick("skill")}><span></span><h3>skill</h3></li>
                    <li onClick={() => onHamClick("work")}><span></span><h3>work</h3></li>
                    <li onClick={() => onHamClick("contact")}><span></span><h3>contact</h3></li>
                </ul>
            </div>
        </>
    );
}


export default Nav;