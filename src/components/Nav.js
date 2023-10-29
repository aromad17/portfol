import React, { useEffect, useRef } from "react";
import { FaHome, FaUserAlt, FaPhone, FaAlignJustify } from "react-icons/fa";
import "../styles/nav.scss"
import { useNavigate } from 'react-router-dom';

function Nav({ checkHome }) {

    const navigate = useNavigate();
    const liRef = useRef(null);



    useEffect(() => {

        liRef.current = document.querySelectorAll(".nav_items>li");

    }, [])


    const onClick = (page) => {
        navigate(`/${page}`);
    }


    const onMouseEnter = (num) => {

        const navArray = Array.from(liRef.current);

        liRef.current.forEach((item, idx) => {
            item.classList.remove("on");
        })

        navArray[num].classList.add("on");


    }

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

    }, []);

    return (
        <div className={`${checkHome ? 'nav' : 'noNav'}`}>
            <ul className="nav_items" onMouseLeave={() => {
                liRef.current.forEach((item, idx) => {
                    item.classList.remove("on");
                })
            }
            }>
                <li onClick={() => onClick("")} onMouseEnter={() => onMouseEnter(0)} >home<FaHome /></li>
                <li onClick={() => onClick("about")} onMouseEnter={() => onMouseEnter(1)}>about<FaUserAlt /></li>
                <li onClick={() => onClick("work")} onMouseEnter={() => onMouseEnter(2)}>work<FaAlignJustify /></li>
                <li onClick={() => onClick("contact")} onMouseEnter={() => onMouseEnter(3)}>contact<FaPhone /></li>
            </ul>
        </div>
    );
}


export default Nav;