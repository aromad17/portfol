import React, { useEffect, useRef, useState } from "react";
import '../styles/work.scss';
import { FaHome, FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import project from '../data/project.json';
import Projects from "./Projects";

function Work({ setCheckHome }) {
    setCheckHome(true);
    const [num, setNum] = useState(0);
    const ulRef = useRef(null);
    const liRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);



    useEffect(() => {

        liRef.current = document.querySelectorAll(".work_list>ul>li");
        ulRef.current = document.querySelector(".work_list>ul");
        prevRef.current = document.querySelector(".prev_btn");
        nextRef.current = document.querySelector(".next_btn");

        liRef.current.forEach(item => {
            if (item.classList.contains("movie") || item.classList.contains("messanger")) {
                item.querySelector(".left").querySelector(".w3c").classList.add("noW3c");
            }
        }
        )


    }, [])



    const prevClick = () => {
        setNum((prevNum) => {
            let newNum = prevNum + 1;
            if (newNum > 0) {
                newNum = 0;
                return newNum;
            } else {
                const ulWidth = ulRef.current.offsetWidth;
                ulRef.current.style.opacity = 0;
                setTimeout(() => {
                    ulRef.current.style.left = newNum * (ulWidth / 6) + "px";
                    setTimeout(() => {
                        ulRef.current.style.opacity = 1;
                    }, 100);
                }, 200)
                return newNum;
            }

        });
    }

    const nextClick = () => {
        setNum((prevNum) => {
            let newNum = prevNum - 1;
            if (newNum < -4) {
                newNum = -4;
                return newNum;
            } else {
                const ulWidth = ulRef.current.offsetWidth;
                ulRef.current.style.opacity = 0;
                setTimeout(() => {
                    ulRef.current.style.left = newNum * (ulWidth / 6) + "px";
                    setTimeout(() => {
                        ulRef.current.style.opacity = 1;
                    }, 100);
                }, 200)
            }
            return newNum;
        });

    }

    window.addEventListener("resize", () => {
        ulRef.current = document.querySelector(".work_list>ul");
        const ulWidth = ulRef.current.offsetWidth;
        ulRef.current.style.left = num * (ulWidth / 6) + "px";

    })

    return (<>
        <div className="work">
            <div className="work_inner">
                <div className="work_tit">
                    <h1 className="on">WORK</h1>
                </div>
                <div className="work_con">

                    <div className="work_list">
                        <ul>
                            {project.Project.map((project, idx) => (
                                <Projects
                                    key={idx}
                                    name={project.name}
                                    className={project.class}
                                    skill={project.skill}
                                    function1={project.function}
                                    homepage={project.page_link}
                                    github={project.github_link}
                                    videoUrl={project.video_url}
                                />
                            ))}


                        </ul>
                    </div>

                </div>
            </div>
        </div >

        <div className="list_control">
            <a className="prev_btn" onClick={prevClick}><FaArrowLeft /></a>

            <a className="next_btn" onClick={nextClick}><FaArrowRight /></a>
        </div>
    </>



    )

}

export default Work;

