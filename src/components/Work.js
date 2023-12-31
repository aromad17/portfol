import React, { useEffect, useRef, useState } from "react";
import "../styles/work.scss";
import { FaHome, FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import project from "../data/project.json";
import Projects from "./Projects";
import Accessibility from "./Accessibility";
import { useNavigate } from "react-router-dom";

function Work({ setCheckHome }) {
  const [num, setNum] = useState(0);
  const ulRef = useRef(null);
  const liRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const [startY, setStartY] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [workName, setWorkName] = useState("");

  let isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 300);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setStartY(null);
  };

  const handleTouchMove = (e) => {
    if (startY) {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      if (deltaY > -50 && window.scrollY <= 0) {
        navigate("/skill");
      } else if (deltaY < -50) {
        navigate("/contact");
      }
    }
  };

  const handleWheel = (e) => {
    if (isScrolling === false) {
      if (e.deltaY < 0 && window.scrollY <= 0) {
        isScrolling = true;
        navigate("/skill");
      } else if (
        e.deltaY > 50 &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        isScrolling = true;
        navigate("/contact");
      }
    }
  };

  useEffect(() => {
    setCheckHome(true);

    liRef.current = document.querySelectorAll(".work_list>ul>li");
    ulRef.current = document.querySelector(".work_list>ul");

    liRef.current.forEach((item) => {
      if (
        item.classList.contains("movie") ||
        item.classList.contains("messanger") ||
        item.classList.contains("next_movie")
      ) {
        item
          .querySelector(".left")
          .querySelector(".w3c")
          .classList.add("noW3c");
      }
    });

    prevRef.current = document.querySelector(".prev_btn");
    nextRef.current = document.querySelector(".next_btn");

    if (num === 0) {
      prevRef.current.style.display = "none";
    }
  }, []);

  const prevClick = () => {
    setNum((prevNum) => {
      let newNum = prevNum + 1;
      if (newNum === 0) {
        prevRef.current.style.display = "none";
      } else {
        prevRef.current.style.display = "block";
        nextRef.current.style.display = "block";
      }
      if (newNum > 0) {
        newNum = 0;
        return newNum;
      } else {
        const ulWidth = ulRef.current.offsetWidth;
        ulRef.current.style.opacity = 0;
        setTimeout(() => {
          ulRef.current.style.left = newNum * (ulWidth / 7) + "px";
          setTimeout(() => {
            ulRef.current.style.opacity = 1;
          }, 100);
        }, 200);
        return newNum;
      }
    });
  };

  const nextClick = () => {
    prevRef.current.style.opacity = "block";
    setNum((prevNum) => {
      let newNum = prevNum - 1;

      if (newNum === -6) {
        nextRef.current.style.display = "none";
      } else {
        prevRef.current.style.display = "block";
        nextRef.current.style.display = "block";
      }

      if (newNum < -6) {
        newNum = -6;

        return newNum;
      } else {
        const ulWidth = ulRef.current.offsetWidth;

        ulRef.current.style.opacity = 0;
        setTimeout(() => {
          ulRef.current.style.left = newNum * (ulWidth / 7) + "px";
          setTimeout(() => {
            ulRef.current.style.opacity = 1;
          }, 100);
        }, 200);
      }

      return newNum;
    });
  };

  window.addEventListener("resize", () => {
    if (ulRef.current) {
      const ulWidth = ulRef.current.offsetWidth;
      ulRef.current.style.left = num * (ulWidth / 7) + "px";
    }
  });

  return (
    <>
      <div
        className="work"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isClicked ? (
          <Accessibility
            workName={workName}
            setWorkName={setWorkName}
            setIsClicked={setIsClicked}
          />
        ) : (
          <></>
        )}
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
                    iosVideoUrl={project.ios_video_url}
                    setIsClicked={setIsClicked}
                    setWorkName={setWorkName}
                    isW3c={project.isW3c}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="list_control">
        <a className="prev_btn" onClick={prevClick}>
          <FaArrowLeft />
        </a>

        <a className="next_btn" onClick={nextClick}>
          <FaArrowRight />
        </a>
      </div>
    </>
  );
}

export default Work;
