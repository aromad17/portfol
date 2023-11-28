import React, { useEffect, useRef } from "react";
import { FaHome, FaGithub } from "react-icons/fa";

function Projects({
  setIsClicked,
  setWorkName,
  keyNum,
  name,
  className,
  skill,
  function1,
  homepage,
  github,
  videoUrl,
  iosVideoUrl,
  isW3c,
}) {
  const mockupRef = useRef(null);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    mockupRef.current = document.querySelectorAll(".mockup");
    const mockupArray = Array.from(mockupRef.current);
  }, []);

  const mockupEnter = (e) => {
    e.preventDefault();

    mockupRef.current.forEach((item) => {
      item.classList.add("on");
    });
  };

  const mockupLeave = (e) => {
    e.preventDefault();
    mockupRef.current.forEach((item) => {
      item.classList.remove("on");
    });
  };

  const w3c = (work) => {
    setIsClicked(true);
    setWorkName(work);
  };

  return (
    <li className={className} key={keyNum}>
      <div className="left">
        <div
          className="mockup"
          onMouseEnter={mockupEnter}
          onMouseLeave={mockupLeave}
          onTouchStart={mockupEnter}
        >
          <div className="video_box">
            <video muted autoPlay loop playsInline>
              {isIOS ? (
                <source src={` ${process.env.PUBLIC_URL}${iosVideoUrl}`} />
              ) : (
                <source src={` ${process.env.PUBLIC_URL}${videoUrl}`} />
              )}
            </video>
          </div>
        </div>

        <div className="w3c">
          <ul>
            <li>기여도 100%</li>
            {isW3c ? (
              <li
                onClick={() => {
                  w3c({ className });
                }}
              >
                W3C 웹 접근성 검사 결과 보기
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="project_tit">
          <h2>{name}</h2>
          <ul className="used_skills">
            {skill.map((item, idx2) => (
              <li key={idx2}>{item}</li>
            ))}
          </ul>
        </div>

        <dl className="technique_list">
          <dt>주요 기술</dt>
          {function1.map((item, idx1) => (
            <dd key={idx1}>🤍&nbsp;&nbsp;{item}</dd>
          ))}
        </dl>

        <ul className="link">
          <li>
            <a href={homepage} title="사이트로 이동" target="_blank">
              <FaHome />
            </a>
          </li>
          <li>
            <a href={github} title="깃헙 레파지토리로 이동" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default Projects;
