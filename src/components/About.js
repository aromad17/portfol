import React, { useEffect, useState } from "react";
import '../styles/about.scss';
import { useNavigate } from 'react-router-dom';

function About({ setCheckHome }) {

    useEffect(() => {

        setCheckHome(true);
    }, [])

    const navigate = useNavigate();
    const [startY, setStartY] = useState(null);
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

            if (deltaY > -50) {
            } else if (deltaY < -50 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                navigate('/skill');
            }
        }
    };

    const handleWheel = (e) => {

        if (isScrolling === false) {
            if (e.deltaY > 0 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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
            <div className="loader_wrap">
                <div className="loader"></div>
            </div>

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
                                안녕하세요!<br /><br />
                                저는 항상 새로운 기술을 배우고 활용하는것을 좋아하는 개발자 입니다.<br />
                                생각에서 그치는 것이 아닌 시각적으로 구현해 내는 즐거움을 알고 있으며,<br />
                                끊임없이 고민하고 팀원들과의 원활한 의사소통으로 궁극적으로 좋은 결과를 낼 수 있도록 보여드릴 수 있습니다.
                                <br /><br />
                                현재는 프론트엔드 개발자가 되기 위해 6개월 프론트엔드 교육 수료 후 꾸준히 공부하며 자기개발에 힘쓰고 있습니다.
                                <br /><br />
                                항상 주어진 일에 책임감 있는 모습으로 업무에 임하며 최선을 다하겠습니다.

                            </p>
                        </div>

                        <div className="info">
                            <h2 className="infoTit">My <span>Info</span></h2>
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


