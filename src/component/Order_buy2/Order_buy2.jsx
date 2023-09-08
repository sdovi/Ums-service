import React, { useState, useEffect } from 'react';
import './style.scss';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Order_buy2 = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { array } = useContext(Context);
  const infos = useParams();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [warning, setWarning] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // При изменении текста в поле снова скрываем предупреждение
    if (value) {
      setWarning('');
    }
  };

  const handleSubmitButtonClick = () => {
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.comments) {
      setWarning('Заполните все поля ввода');
      return;
    }

    setShowModal(true);
  };

  const handleSubmit = () => {
    const products = array.filter((card) => card.id == infos.id)
    .map((item) => {
      return `
      ПРОДУКТ:${item.title}, 
      ЦЕНА:${item.price} $`;
    }).join('\n');

    const requestData = {
      title: `${formData.firstName} ${formData.lastName}`,
      price: formData.phone,
      EMail: formData.email,
      description: formData.comments,
      shop: products,
    };

    try {
      axios.post('http://127.0.0.1:8000/api/accepting/', requestData)
        .then((response) => {
          console.log('Response:', response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  function Modal({ onClose }) {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-container">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in-up">
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>Подтвердить заказ?</h2>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={handleSubmit}>Отправить заявку</button>
              <button className="cancel-button" onClick={onClose}>Отмена</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        {array.filter((card) => card.id == infos.id)
          .map((card) => (
            <div key={card.id}>
              <section className='Order'>
                <div className="order__container mb-5" >
                  <div className="order__top-text">
                    <h2>Оформление заказа</h2>
                  </div>

                  <div className="order__com-block">
                    <div className="order__block1">
                      <div className="recipient-info pt-3">
                        <h5>Информация о получателе:</h5>
                        <input
                          type="text"
                          placeholder="Имя"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          placeholder="Фамилия"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="phone-email">
                        <h5>Телефон:</h5>
                        <input
                          type="text"
                          placeholder="+998 (   )"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="comments">
                        <h5>Комментарий:</h5>
                        <input
                          type="text"
                          placeholder="Комментарии"
                          name="comments"
                          value={formData.comments}
                          onChange={handleInputChange}
                        />
                        {warning && <p className="warning">{warning}</p>}
                      </div>

                      <div className="submit-button">
                        <h2>К оплате: <span className='order__comm-price'>{card.price} ₴</span></h2>
                        <button className="submit-button" onClick={handleSubmitButtonClick}>Отправить заявку</button>
                      </div>
                    </div>
                    <div className="order__block2">
                      <h5>Товары в корзине</h5>
                      <div className="order__product">
                        <img src={card.image} alt="" />
                        <div className="order__product-text">
                          <p>{card.title}</p>
                          <p>{card.price} ₴</p>
                        </div>
                      </div>
                      <h6 className='order__com-price-right'>Общая сумма: <span className='order__comm-price'>{card.price} ₴</span></h6>
                    </div>
                    {showModal && <Modal onClose={() => setShowModal(false)} />}
                  </div>
                </div>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};
