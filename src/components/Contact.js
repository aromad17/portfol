import React, { useState, useEffect, useRef } from 'react';
import '../styles/contact.scss';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Contact({ setCheckHome }) {

  setCheckHome(true);
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

      if (deltaY > -50 && window.scrollY <= 0) {
        navigate('/work');
      }
    }
  };

  const handleWheel = (e) => {

    if (isScrolling === false) {
      if (e.deltaY < 0 && window.scrollY <= 0) {
        console.log(e.deltaY)
        navigate('/work');
      }

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // 1초 동안 중복 호출 방지
    };
  }





  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_grccemm', 'template_hlatgpe', form.current, 'qTq6OGEExX3rv-VfH')
      .then((result) => {
        console.log(result.text);
        setFormData({ user_name: '', user_email: '', message: '' });
        alert("빠른 확인 후 연락드리겠습니다.")
      }, (error) => {
        console.log(error.text);
      });
  };



  return (

    <div className='contact'
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='contact_inner'>
        <div className='contact_tit'>
          <h1 className='on'>Contact</h1>
        </div>
        <div className='contact_con'>
          <div className='touch'>
            <h2>
              <FaPhoneAlt />GET IN TOUCH
              <span></span>
            </h2>
            <div>
              <ul>
                <li>
                  <dl>
                    <dt>PHONE</dt>
                    <dd>(+82)10 6685 0145</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>E-MAIL</dt>
                    <dd>aromad1117@gmail.com</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>GITHUB</dt>
                    <dd>
                      <a href='https://github.com/'>
                        <FaGithub />
                      </a>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>

          <div className='mail'>
            <h2>
              <FaEnvelope />SEND A MAIL
              <span></span>
            </h2>
            <div>
              <form ref={form} onSubmit={handleSubmit}>

                <div className='form_con'>
                  <label>이름</label>
                  <input type="text" name="user_name" onChange={handleChange} value={formData.user_name} required className='text_insert' />
                </div>

                <div className='form_con'>
                  <label>이메일</label>
                  <input type="email" name="user_email" onChange={handleChange} value={formData.user_email} required className='text_insert' />
                </div>

                <div className='form_con send_area'>
                  <label>내용</label>
                  <textarea name="message" onChange={handleChange} value={formData.message} required />
                  <input type="submit" value="전송" className='send_btn' />
                </div>
                <input type="submit" value="전송" className='send_btn2' />


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
