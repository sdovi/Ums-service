import React, { useState, useEffect } from 'react';
import './style.scss';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Item from 'antd/es/list/Item';

export const Order = () => {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [warning, setWarning] = useState('');
  // Состояние для отображения модального окна с багодарностью
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);

  const openThankYouModal = () => {
    setThankYouModalOpen(true);
  };

  const closeThankYouModal = () => {
    setThankYouModalOpen(false);
  };


  // Состояние для отображения модального окна с багодарность-end
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
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      setWarning('Заполните все поля ввода');
      return;
    }

    setShowModal(true);
    console.log(showModal);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const postApi = async () => {
    const products = items.map((item) => {
      return `
      ПРОДУКТ N${Item.id} ${item.title}
      Количество:${item.quantity} x ${item.price}$ = ${item.quantity * item.price}$`;
    }).join('\n');

    // Проверяем, есть ли комментарий; если нет, устанавливаем "нет"
    const description = formData.comments || "нет";

    const requestData = {
      title: `${formData.firstName} ${formData.lastName}`,
      price: formData.phone,
      EMail: formData.email,
      description: description, // Используем значение комментария или "нет"
      shop: products,
    };

    try {
      const response = await axios.post('https://64fb01c6cb9c00518f7a81e5.mockapi.io/Orders/', requestData);
      console.log('Response:', response.data);
      // Закрыть текущее модальное окно
      setShowModal(false);
      // Открыть новое модальное окно с сообщением "спасибо, мы вам скоро перезвоним"
      openThankYouModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function ThankYouModal({ onClose }) {
    const handleRefresh = () => {
      window.location.reload();
      onClose()
    };
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-container" data-aos="zoom-in-up">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleRefresh}>&times;</button>
            
            
            <div className="animation-ctn">
              <div className="icon icon--order-success svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                  <g fill="none" stroke="#22AE73" strokeWidth="2">
                    <circle cx="77" cy="77" r="72" style={{ strokeDasharray: '480px, 480px', strokeDashoffset: '960px' }}></circle>
                    <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: '480px, 480px', strokeDashoffset: '960px' }}></circle>
                    <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4" style={{ strokeDasharray: '100px, 100px', strokeDashoffset: '200px' }} />
                  </g>
                </svg>
              </div>
            </div>
            <h2><span className='Thanks'>Спасибо,</span></h2>
            <h3 className='thanks__perezvon'> мы вам скоро перезвоним</h3>


          </div>
        </div>
      </div>
    );
  }
  function Modal({ onClose }) {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-container" data-aos="zoom-in-up">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>Подтвердить заказ?</h2>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={postApi}>Отправить заявку</button>
              <button className="cancel-button" onClick={onClose}>Отмена</button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div>
      <section className="Order">
        {isEmpty ? (
          <div>
            <p className="korzina-pust">Нету продуктов.</p>
          </div>
        ) : (
          <div className="order__container mb-5">
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
                  <h2>К оплате: <span className='order__comm-price'>{cartTotal} ₴ </span></h2>
                  <button className="submit-button" onClick={handleSubmitButtonClick}>Отправить заявку</button>
                </div>
              </div>
              <div className="order__block2">
                <h5>Товары в корзине</h5>
                {items.map((item) => (
                  <Link to={`/${item.id}`} >
                    <div className="order__product" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="order__product-text">
                      <p>{item.title}</p>
                      <p>{item.price} ₴ </p>
                      <p>{item.quantity} шт</p>
                    </div>
                  </div></Link>
                ))}
              </div>
              {thankYouModalOpen && <ThankYouModal onClose={closeThankYouModal} />}

              {showModal && <Modal onClose={() => setShowModal(false)} />}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
