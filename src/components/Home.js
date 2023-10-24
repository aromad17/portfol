import React, { useEffect, useState } from "react";
import "../styles/home.scss"
import { useNavigate } from 'react-router-dom';

function Home({ checkHome, setCheckHome }) {
    const navigate = useNavigate();
    const [checkWidth, setCheckWidth] = useState(false);
    const [addClass, setAddClass] = useState(false);
    const [homePosition, setHomePosition] = useState(false);
    const [startY, setStartY] = useState(null);


    setCheckHome(false);
    const textTime = setTimeout(() => {
        setAddClass(true);
    }, 0);



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

            if (deltaY > -30) {
                console.log('Swipe Down');
            } else if (deltaY < -50) {
                console.log(deltaY);
                navigate('/about');
            }
        }
    };

    window.addEventListener("scroll", () => {

        console.log(window.scrollX, window.scrollY);
        let scrollTop = window.scrollY;
        if (scrollTop > 100) {
            setHomePosition(true);
        }
    })

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            navigate('/about');
            setCheckHome(true);
        }
    };


    useEffect(() => {

        let screenWdith = window.innerWidth;

        if (screenWdith < 1300) {
            setCheckWidth(true);
        } else {
            setCheckWidth(false);
        }

        window.addEventListener("resize", () => {
            const screenWdith = window.innerWidth;
            if (screenWdith < 1300) {
                setCheckWidth(true);
            } else {
                setCheckWidth(false);
            }
        })

        const elts = {
            text1: document.getElementById("text1"),
            text2: document.getElementById("text2")
        };


        const texts = [
            "컴퓨터를 좋아하고",
            "끈기 있고",
            "창의적인",
            "프론트엔드 개발자"
        ];

        // Controls the speed of morphing.
        const morphTime = 0.5;
        const cooldownTime = 0.5;

        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        }

        function doCooldown() {
            morph = 0;

            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";

            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }

        function animate() {
            requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
                doMorph();
            } else {
                doCooldown();
            }
        }

        animate();




    }, [])

    return (
        <div className={`home ${homePosition ? 'on' : ''}`}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >

            {checkWidth ?
                <video src={process.env.PUBLIC_URL + '/img/develope_mo.mp4'} muted autoPlay loop playsInline type="video/mp4">
                </video>
                :
                <video src={process.env.PUBLIC_URL + '/img/develope.mp4'} muted autoPlay loop playsInline type="video/mp4">
                </video>
            }


            <div className={`introduceText ${addClass ? 'on' : ''}`}>
                <div className="hello">안녕하세요 !</div>
                <div className="whatIam">
                    {/* 텍스트효과부분 */}
                    <div id="container">

                        <span id="text1"></span>
                        <span id="text2"></span>

                    </div>
                    <svg id="filters">
                        <defs>
                            <filter id="threshold">
                                <feColorMatrix in="SourceGraphic"
                                    type="matrix"
                                    values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
                            </filter>
                        </defs>
                    </svg>
                    {/* 텍스트효과부분 */}
                </div>
                <div className="hello"><span>" 이상현 " </span>입니다.</div>
            </div>

            <div className={`scroll_down ${addClass ? 'on' : ''}`}>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <span className="text">Scroll down</span>
            </div>


        </div>
    )

}

export default Home;