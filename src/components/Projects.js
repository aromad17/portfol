import React, { useEffect, useRef } from "react";
import { FaHome, FaGithub } from "react-icons/fa";

function Projects({ name, className, skill, function1, homepage, github, videoUrl, keyNum }) {

    const mockup = document.querySelector(".mockup");

    const mockupEnter = (e) => {
        e.preventDefault();
        mockup.classList.add("on");
    }

    const mockupLeave = (e) => {
        e.preventDefault();
        mockup.classList.remove("on");
    }

    return (

        <li className={className} key={keyNum}>
            <div className="left">
                <div className="mockup"
                    onMouseEnter={mockupEnter}
                    onMouseLeave={mockupLeave}
                    onTouchStart={mockupEnter}
                >
                    <div className="video_box">

                        <video src={` ${process.env.PUBLIC_URL}${videoUrl}`} muted autoPlay loop playsInline />
                    </div>
                </div>

                <div className="w3c">
                    <ul>

                        <li>기여도 100%</li>
                        <li>W3C 웹 접근성 통과</li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="project_tit">
                    <h2>{name}</h2>
                    <ul className="used_skills">
                        {skill.map((item, idx2) =>
                            <li key={idx2}>{item}</li>
                        )}
                    </ul>
                </div>



                <dl className="technique_list">
                    <dt>주요 기술</dt>
                    {function1.map((item, idx1) =>
                        <dd key={idx1}>🤍&nbsp;&nbsp;{item}</dd>
                    )}
                </dl>

                <ul className="link">
                    <li><a href={homepage} title="사이트로 이동" target="_blank"><FaHome /></a></li>
                    <li><a href={github} title="깃헙 레파지토리로 이동" target="_blank"><FaGithub /></a></li>
                </ul>

            </div>

        </li >

    )
}

export default Projects