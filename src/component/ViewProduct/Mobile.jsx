import React, { useState } from 'react';
import './style.scss';
import img1 from './img/card1.png';
import start from './img/starss.png';
import tg from './img/logos_telegram.png';
import viber from './img/viber.png';
import card1 from './img/payment-method 1.png';
import card2 from './img/icons.png';
import card3 from './img/truck 1.png';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export const Mobile = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { array } = useContext(Context);
  const infos = useParams();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
    quantity,
  } = useCart();

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div>
        <div className="container-view">
          {array
            .filter((card) => card.id == infos.id)
            .map((card) => (
              <div className="view__common-block mt-5" key={card.id}>
                <h1 className="view__title-mobile">Энурезный будильник SF BEMNY</h1>
                <div className="view__block1">
                  <div className="view__block-photo view__block-photo-pk">
                    <img
                      src={card.image}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image)}
                    />
                    <img
                      src={card.image2}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image2 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image2)}
                    />
                    <img
                      src={card.image3}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image3 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image3)}
                    />
                    <img
                      src={card.image4}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image4 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image4)}
                    />
                  </div>
                  <div className="view__block-photo2">
                    <img src={selectedImage || card.image} alt="" />
                  </div>
                  <div className="view__block-photo view__block-photo-mobile">
                  <img
                      src={card.image}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image4 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image)}
                    />
                  
                  <img
                      src={card.image2}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image4 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image2)}
                    />
                  <img
                      src={card.image3}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image4 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image3)}
                    />
                  <img
                      src={card.image4}
                      alt=""
                      className={`view__left-photo ${
                        selectedImage === card.image4 ? 'selected' : ''
                      }`}
                      onClick={() => handleImageClick(card.image4)}
                    />
                  </div>
                </div>
                <div className="view__block2">
                  <div className="view__text-common">
                    <div className="view__text1">
                      <div className="view__text1-content">
                        <div className="view__block2-stars">
                          <img src={start} alt="" />
                          <img src={start} alt="" />
                          <img src={start} alt="" />
                          <img src={start} alt="" />
                          <img src={start} alt="" />
                        </div>
                        <p>23 отзыва</p>
                      </div>
                      <h4>{card.price} ₴ </h4>
                      <div class="checkbox-container">
                        <label class="checkbox">
                          <input type="checkbox" class="custom-checkbox" />
                        </label>
                        <span className="view-text2-nalichka">В наличии</span>
                      </div>
                      <div className="view__quaniti">
                        <p className="col-quanity">Колличество:</p>
                        <div className="chena-sups">
                          <div className="view__com-quanity">
                            <div className="view__com-btn">
                              <div className="view__button-buy">
                              <Link to={`/order/${card.id}`}><button>Купить</button></Link>
                              </div>
                            </div>
                            <div className="View__korzina-btn">
                              <button onClick={() => addItem(card)}>
                                {items.find((item) => item.id === card.id)
                                  ? 'Уже в корзине'
                                  : 'В корзину'}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="view__logos-tg-viber">
                          <img src={tg} alt="" />
                          <img src={viber} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="view__text2 ">
                      <div className="view__text-dostavka">
                        <div className="view__dostavka-content">
                          <i class="fa-solid fa-truck fa-sm"></i>
                          <h6>Способы доставки:</h6>
                        </div>
                        <p>
                          • Новая Почта <br />
                          • Доставка "Укрпошта" <br />
                          • Доставка "Justin" <br />
                          • Meest Express
                        </p>
                      </div>
                      <div className="view__text-dostavka">
                        <div className="view__dostavka-content">
                          <i class="fa-regular fa-credit-card fa-sm"></i>
                          <h6>Оплата:</h6>
                        </div>
                        <p>• Оплата Visa, Mastercard</p>
                      </div>
                    </div>
                  </div>
                  <div className="view__bottom-block pt-5">
                    <div className="view__bottom-block1">
                      <img src={card1} alt="" />
                      <p>Гарантия качества</p>
                    </div>
                    <div className="view__bottom-block1">
                      <img src={card2} alt="" />
                      <p>Оперативная доставка</p>
                    </div>
                    <div className="view__bottom-block1">
                      <img src={card3} alt="" />
                      <p>Все способы оплаты</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
