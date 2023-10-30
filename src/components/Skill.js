import React, { useEffect, useRef } from "react";
import '../styles/skill.scss';
import { FaRegCircle } from "react-icons/fa";

function Skill({ setCheckHome }) {

    setCheckHome(true);

    return (

        <div className='skill'>
            <div className='skill_inner'>
                <div className='skill_tit'>
                    <h1 className='on'>SKILL</h1>
                </div>

                <div className='skill_con'>
                    {/* <div className="skill_cover"></div> */}
                    <ul>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/html5.png'} alt="me" />
                                <h2>HTML</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>HTML 마크업 전문가</dt>
                                    <dd><FaRegCircle /> 웹 페이지를 HTML을 사용하여 설계, 구축 및 최적화합니다</dd>
                                    <dd><FaRegCircle /> 웹 표준과 웹 접근성 지침을 준수하여 웹페이지를 제작가능합니다.</dd>
                                    <dd><FaRegCircle /> 모바일 반응형 디자인을 구현합니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/css3.png'} alt="me" />
                                <h2>CSS</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>집요한 CSS 스타일링</dt>
                                    <dd><FaRegCircle /> 다양한 CSS 속성과 선택자를 활용하여 웹 페이지 디자인을 구축하고 스타일링</dd>
                                    <dd><FaRegCircle /> 미디어 쿼리를 활용하여 모바일 및 데스크탑에 맞는 반응형 디자인을 개발합니다.</dd>
                                    <dd><FaRegCircle /> 조금의 오차도 보면 견딜 수가 없습니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/javascript.png'} alt="me" />
                                <h2 className="adobe">javascript</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>즐기는 JavaScript 개발자</dt>
                                    <dd><FaRegCircle /> JavaScript를 사용하여 동적 웹 애플리케이션 및 기능을 개발하고 최적화합니다.</dd>
                                    <dd><FaRegCircle /> 이벤트 핸들링, DOM 조작 등을 통해 웹 페이지 상호작용성을 향상시킵니다.</dd>
                                    <dd><FaRegCircle /> 사용자 요구 사항을 충족시키기 위해 웹 페이지를 동적으로 제어합니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/typescript.png'} alt="me" />
                                <h2 className="adobe">typescript</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>타입스크립트 입문자</dt>
                                    <dd><FaRegCircle /> 타입스크립트를 사용하여 안정적이고 유지보수 가능한 코드를 작성합니다.</dd>
                                    <dd><FaRegCircle /> 타입스크립트를 사용하여 프론트엔드 코드를 보다 견고하게 만듭니다.</dd>
                                    <dd><FaRegCircle /> 현재 더 활용도를 높이기 위해 공부 중입니다...</dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="me" />
                                <h2>react</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>리액트 프론트엔드 개발자</dt>
                                    <dd><FaRegCircle /> 웹 애플리케이션을 개발하고 컴포넌트 기반 아키텍처를 활용합니다.</dd>
                                    <dd><FaRegCircle /> 라우팅 라이브러리를 사용하여 다중 페이지 애플리케이션을 구축합니다.</dd>
                                    <dd><FaRegCircle /> 리액트 생명주기 및 훅을 활용하여 컴포넌트를 최적화하고 사용자 경험을 향상시킵니다.</dd>
                                    <dd><FaRegCircle /> 외부 api를 사용하여 활용 가능합니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/firebase.png'} alt="me" />
                                <h2>firebase</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>Firebase활용 가능</dt>
                                    <dd><FaRegCircle /> firebase를 이용하여 데이터를 저장하고 실시간으로 동기화 가능합니다.</dd>
                                    <dd><FaRegCircle /> Auth 기능을 이용하여 goolge,apple 등 소셜 계정으로 가입,로그인 가능하게 합니다.</dd>
                                    <dd><FaRegCircle /> 이미지 파일을 링크화하여 웹 페이지에 사용할 수 있습니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/sass.png'} alt="me" />
                                <h2>sass</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dd><FaRegCircle /> Sass를 사용하여 효율적이고 모듈화된 CSS 스타일 시트를 작성하고 유지합니다.</dd>
                                    <dd><FaRegCircle /> 유지보수가 용이하게 활용 가능합니다.</dd>


                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/figma.png'} alt="me" />
                                <h2>figma</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>Figma UI/UX 디자이너</dt>
                                    <dd><FaRegCircle /> 피그마를 사용하여 UI/UX 디자인을 작성하고 프로토타입을 제작합니다.</dd>
                                    <dd><FaRegCircle /> 다양한 디자인 요소 및 컴포넌트를 활용하여 모바일 및 데스크탑 애플리케이션의 시각적 디자인을 구축합니다.</dd>

                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/photoshop.png'} alt="me" />
                                <h2 className="adobe">photoshop</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>포토샵 그래픽 디자이너</dt>
                                    <dd><FaRegCircle /> 포토샵을 사용하여 다양한 그래픽 디자인 작업을 수행합니다.</dd>
                                    <dd><FaRegCircle /> 이미지 편집, 아이콘, 로고 및 일러스트레이션 디자인을 효과적으로 작성합니다</dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/img/illustrator.png'} alt="me" />
                                <h2 className="adobe">illustrator</h2>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt>일러스트레이터 그래픽 디자이너</dt>
                                    <dd><FaRegCircle /> 일러스트레이터를 사용하여 일러스트레이션 및 벡터 그래픽 디자인을 제작합니다.</dd>
                                    <dd><FaRegCircle /> 로고, 아이콘, 포스터, 명함 및 타이포그래피 디자인을 생성하고 수정합니다.</dd>

                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )


}

export default Skill