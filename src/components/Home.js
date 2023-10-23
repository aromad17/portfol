import React, { useEffect, useState } from "react";
import "../styles/home.scss"

function Home() {

    const [checkWidth, setCheckWidth] = useState(false);

    useEffect(() => {
        const screenWdith = window.innerWidth;

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
        const morphTime = 1;
        const cooldownTime = 1;

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
        <div className="home">

            {checkWidth ?
                <video src={process.env.PUBLIC_URL + '/img/develope_mo.mp4'} muted={true} autoPlay={true} loop={true} type="video/mp4">
                </video>
                :
                <video src={process.env.PUBLIC_URL + '/img/develope.mp4'} muted={true} autoPlay={true} loop={true} type="video/mp4">
                </video>
            }


            <div className="introduceText">
                <div className="hello">안녕하세요!</div>
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
                <div className="hello">프론트엔드 개발자 <span>" 이상현 " </span>입니다.</div>
            </div>
        </div>
    )

}

export default Home;