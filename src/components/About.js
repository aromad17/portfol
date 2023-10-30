import React, { useEffect, useState } from "react";
import '../styles/about.scss';
import { useNavigate } from 'react-router-dom';



function About({ checkHome, setCheckHome }) {
    const navigate = useNavigate();
    const [startY, setStartY] = useState(null);
    let isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 300);

    setCheckHome(true);

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

            if (deltaY > -50) {
            } else if (deltaY < -50 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                navigate('/skill');
            }
        }
    };

    const handleWheel = (e) => {

        if (isScrolling === false) {
            if (e.deltaY > 0) {
                navigate('/skill');
            }
        }

    }

    useEffect(() => {
        class TextScramble {
            constructor(el) {
                this.el = el
                this.chars = '!<>-_\]{—=+*?#_'
                this.update = this.update.bind(this)
            }

            setText(newText) {
                const oldText = this.el.innerText
                const length = Math.max(oldText.length, newText.length)
                const promise = new Promise((resolve) => this.resolve = resolve)
                this.queue = []
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || ''
                    const to = newText[i] || ''
                    const start = Math.floor(Math.random() * 40)
                    const end = start + Math.floor(Math.random() * 40)
                    this.queue.push({ from, to, start, end })
                }
                cancelAnimationFrame(this.frameRequest)
                this.frame = 0
                this.update()
                return promise
            }

            update() {
                let output = ''
                let complete = 0
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i]
                    if (this.frame >= end) {
                        complete++
                        output += to
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar()
                            this.queue[i].char = char
                        }
                        output += `<span class="dud">${char}</span>`
                    } else {
                        output += from
                    }
                }
                this.el.innerHTML = output
                if (complete === this.queue.length) {
                    this.resolve()
                } else {
                    this.frameRequest = requestAnimationFrame(this.update)
                    this.frame++
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)]
            }
        }

        const phrases = [
            'Sang Hyeon Lee',
            'Front-End Developer',
            'Web Publisher',
            'UI/UX Designer',
        ]

        const el = document.querySelector('.text')
        const fx = new TextScramble(el)

        let counter = 0
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 2000)
            })
            counter = (counter + 1) % phrases.length
        }

        next()
    }, [])


    return (
        <div className="about"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="about_inner">
                <div className="about_con">
                    <div className="left">
                        <div className="colorBlock"></div>
                        <div className="myPic"></div>
                    </div>
                    <div className="right">

                        <div className="titleWrap">
                            <h2 className="helloTit">Hello World ! 😄</h2>
                            <h1>I'm
                                <div className="text"></div>
                            </h1>
                            <p>
                                안녕하세요!<br />
                                저는 항상 새로운 기술을 배우는 것에 긍정적이며 좋아합니다.<br />
                                협업은 따로 해본 적이 없지만 항상 팀원들의 이야기를 듣고 따라가며,<br />
                                궁극적으로 좋은 결과를 낼 수 있도록 노력할 것입니다.<br /><br />

                                현재는 프론트엔드 개발자가 되기 위해 강남 이젠 컴퓨터아카데미에서<br />
                                6개월간 프론트엔드 국비 교육 수료 후
                                집에서 틈틈이 공부하며 구직 중입니다.<br /><br />

                                마지막으로 저는 항상 주어진 일에 책임감 있게 항상 최선을 다할 것입니다.

                            </p>
                        </div>

                        <div className="info">
                            <h2 className="infoTit">Info</h2>
                            <ul>
                                <li>이름 &nbsp;:&nbsp; <span>이상현</span></li>
                                <li>생년월일 &nbsp;:&nbsp; <span>11.17.1993</span></li>
                                <li>전화 &nbsp;:&nbsp; <span>010.6685.0145</span></li>
                                <li>이메일 &nbsp;:&nbsp; <span>aromad1117@gmail.com</span></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>




        </div>
    )

}

export default About;


