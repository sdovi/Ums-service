import React from 'react'
import './style.scss'
import tg from './img/tg.png'
import wb from './img/wb.png'
import { useState } from 'react'
import axios from 'axios'

export const Section4 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/short-order/', {
          title: name,
          phone: phone,
        });
  
        // Обработка успешного ответа от сервера
        console.log('Успешно отправлено:', response.data);
  
        // После успешной отправки, обновляем страницу
        window.location.reload();
      } catch (error) {
        // Обработка ошибки
        console.error('Ошибка:', error);
      }
    };
  
    return (
      <section className='section4 mt-5 mb-5'>
        <div className="sect4__comm-block">
          <div className="sect4__text">
            <h1>Консультация специалиста по телефону</h1>
          </div>
          <div className="sect4__container">
            <div className="sect4__block-input">
              
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className='sect4__input'
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Ваш телефон*"
                  className='sect4__input'
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <button type="submit" onClick={handleSubmit}>Позвоните мне</button>
              
            </div>
          </div>
  
          <div className="sect4_text2">
            <h3>задайте вопрос в удобном для Вас мессенджере:</h3>
            <div className="sect4__logo">
              <img src={tg} alt="" />
              <img src={wb} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  
}
