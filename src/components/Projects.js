import React, { useEffect, useRef } from "react";
import { FaHome, FaGithub } from "react-icons/fa";

function Projects({ name, className, skill, function1, homepage, github, videoUrl, key }) {




    return (

        <li className={className} key={key}>
            <div className="left">
                <div className="mockup">
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
                        {skill.map((skill, idx) =>
                            <li key={idx}>{skill}</li>
                        )}
                    </ul>
                </div>



                <dl className="technique_list">
                    <dt>주요 기술</dt>
                    {function1.map((function1, idx) =>
                        <dd key={idx}>🤍&nbsp;&nbsp;{function1}</dd>
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