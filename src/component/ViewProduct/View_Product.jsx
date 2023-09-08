import React, { useState } from 'react';
import './style.scss';
import img1 from './img/card1.png';
import start from './img/starss.png';
import tg from './img/logos_telegram.png';
import viber from './img/viber.png';
import card1 from './img/payment-method 1.png';
import card2 from './img/icons.png';
import card3 from './img/truck 1.png';
import { Mobile } from './Mobile';
import { Section4 } from './../Section4/Section4';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../context';
import { useCart } from 'react-use-cart';

export const View_Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeTab, setActiveTab] = useState('description');
  const { array } = useContext(Context);
  const infos = useParams();
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
      {array
        .filter((card) => card.id == infos.id)
        .map((card) => (
          <div key={card.id}>
            <div className="container-view view__pk ">
              <div className="view__common-block  mt-5 view__pk">
                <div className="view__block1">
                  <div className="view__block-photo">
                    <img
                      src={card.image}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image)}
                    />
                    <img
                      src={card.image2}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image2 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image2)}
                    />
                    <img
                      src={card.image3}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image3 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image3)}
                    />
                    <img
                      src={card.image4}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image4 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image4)}
                    />
                  </div>
                  <>
                    <div className="view__block-photo2" onClick={handleShow}>
                      <img src={selectedImage || card.image} alt="" />
                    </div>

                    {show && (
                      <div
                        className="fullscreen-image-container"
                        onClick={handleClose}
                      >
                        <img
                          src={selectedImage || card.image}
                          alt=""
                          className="fullscreen-image" data-aos="zoom-in-up"
                        />
                      </div>
                    )}
                  </>
                  <div className="view__block-photo view__block-photo-mobile">
                    <img
                      src={card.image}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image)}
                    />
                    <img
                      src={card.image2}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image2 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image2)}
                    />
                    <img
                      src={card.image3}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image3 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image3)}
                    />
                    <img
                      src={card.image4}
                      alt=""
                      className={`view__left-photo ${selectedImage === card.image4 ? 'selected' : ''
                        }`}
                      onClick={() => handleImageClick(card.image4)}
                    />
                  </div>
                </div>
                <div className="view__block2">
                  <div className="view__text-common">
                    <div className="view__text1">
                      <h1>{card.title}</h1>
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
                        <div className="chena-sups">
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
                          <div className="view__logos-tg-viber">
                            <img src={tg} alt="" />
                            <img src={viber} alt="" />
                          </div>
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
            </div>
            <div className="view__mobile">
              <Mobile />
            </div>
            <div className="container-view">
              <div className="view__specifications">
                <div className="view__specifications-tabs">
                  <div
                    className={`view__specifications-tab ${activeTab === 'description' ? 'active' : ''
                      }`}
                    onClick={() => setActiveTab('description')}
                  >
                    Описание
                  </div>
                  <div
                    className={`view__specifications-tab ${activeTab === 'characteristics' ? 'active' : ''
                      }`}
                    onClick={() => setActiveTab('characteristics')}
                  >
                    Характеристики
                  </div>
                </div>
                <div className="view__specifications-comm-block">
                  {activeTab === 'description' && (
                    <>
                      <h2>Описание</h2>
                      <p className="view__bottom-deskription">{card.description}</p>
                    </>
                  )}
                  {activeTab === 'characteristics' && (
                    <>
                      <h2>Характеристики</h2>
                      <div className="view__xarakteristiki">
                        <div className="view__card-xarakteristiki pt-5">
                          <p>Страна производитель </p>
                          <h6>Китай</h6>
                        </div>
                        <hr className="view__hr" />
                        <div className="view__card-xarakteristiki">
                          <p>Вес </p>
                          <h6>123 г</h6>
                        </div>
                        <hr className="view__hr" />
                        <div className="view__card-xarakteristiki">
                          <p>Гарантия </p>
                          <h6>12 месяцев</h6>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="korzina__poxoj">
                <h2>Похожие товары</h2>
              </div>
              <div className="row">
                {array.map((item) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-6 sect3__card-gap"
                    key={item.id}
                  >
                    <div className="sect3__card">
                      <Link to={`/${item.id}`}>
                        <img src={item.image} alt="" />
                      </Link>
                      <div className="sect3__card-text">
                        <h4>{item.title}</h4>
                        <div className="sect3__card-bottom-block">
                          <h4>{item.price} ₴</h4>
                          <button onClick={() => addItem(item)}>
                            {items.find((el) => el.id === item.id)
                              ? 'Уже в корзине'
                              : 'В корзину'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Section4 />
          </div>
        ))}
    </div>
  );
};