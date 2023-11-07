import React from 'react'
import '../styles/accessibility.scss'
function Accessibility({ workName, setWorkName, setIsClicked }) {

  const onCloseClick = () => {
    setIsClicked(false);
    setWorkName('');
  }

  return (
    <div className='access'>
      <div className='close_access' onClick={() => { onCloseClick() }}>
        <img src={process.env.PUBLIC_URL + '/img/Xmark.png'} alt="close access" />
      </div>
      <div className='access_wrap'>
        <div className='access_left'>
          <h3>W3C 웹표준검사</h3>
          <span>W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고 웹 표준을 준수하여 프로젝트가 개발됐음을 확인할 수 있습니다.</span>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + `/img/${workName.className}_html.png`} alt="close access" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + `/img/${workName.className}_css.png`} alt="close access" />
            </li>
          </ul>
        </div>
        <div className='access_right'>
          <h3>WEB Accessibility 웹 접근성 검사</h3>
          <span>한국형 웹 콘텐츠 접근성 지침2.1을 기준 검사를 통과했습니다.</span>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + `/img/${workName.className}_accessibility.png`} alt="close access" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Accessibility