import React, { useEffect } from "react";
import { FaHome, FaUserAlt, FaPhone, FaAlignJustify } from "react-icons/fa";
import "../styles/nav.scss"
import { useNavigate } from 'react-router-dom';

function Nav({ checkHome }) {

    const navigate = useNavigate();

    const onClick = (page) => {
        navigate(`/${page}`);
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
            <ul>
                <li onClick={() => onClick("")} ><FaHome /></li>
                <li onClick={() => onClick("about")}><FaUserAlt /></li>
                <li onClick={() => onClick("work")}><FaAlignJustify /></li>
                <li onClick={() => onClick("contact")}><FaPhone /></li>
            </ul>
        </div>
    );
}


export default Nav;