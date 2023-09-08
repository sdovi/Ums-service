import React from 'react'
import './style.scss'
import { Navbar } from '../Navbar/Navbar'
import { Section4 } from '../Section4/Section4'
import { Footer } from '../Footer/Footer'
import { useCart } from 'react-use-cart'
import { Context } from '../../context'
import { useContext } from 'react'

import photo from './img/Rectangle 5 (4).png'
import { Link } from 'react-router-dom'
export const Korzina = () => {


    const Korzina_mobile = () => {

        return (
            <div>

                {items.map((item =>
                    <div className="korzina__product korzina__product-mb" key={item.id}>
                        <div className="korzina__product-photo">
                            <img src={item.image} alt="" />

                        </div>
                        <div className="korzina-product-title">
                            <h3>{item.title}
                            </h3>
                            <div className="korzina__mobile-content">

                                <div className="korzina-product-price">
                                    <h4 >{item.price} ₴ </h4>
                                    <div className="korzina-product-quanity">
                                        <div className="view__com-quanity ">


                                            <div className="sup-btn">{item.quantity}</div>
                                            <div className="view__quanity-btn">
                                                <button className="plus minust">
                                                    <i onClick={() => updateItemQuantity(item.id, item.quantity + 1)} class="fa-solid fa-chevron-up fa-xl quanity-arrow"></i>
                                                </button>
                                                <button className="plus plust">
                                                    <i onClick={() => updateItemQuantity(item.id, item.quantity + 1)} class="fa-solid fa-chevron-down fa-xl quanity-arrow " ></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="korzina-product-amout">
                                <h4 >{item.quantity * item.price} ₴ </h4>
                                <i
                                    type="submit"

                                    className="fa-solid fa-trash fa-lg"
                                ></i>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        )
    }
    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
        addItem
    } = useCart();


    const handleDecrement = (itemId, quantity) => {
        if (quantity > 1) {
            updateItemQuantity(itemId, quantity - 1);
        }
    };
    const { array } = useContext(Context)

    console.log(items);
    return (
        <div>
            <Navbar />
            <section className='Korizna mb-5'>
                {isEmpty ? (

                    <div className='korzina__container'>
                        <div className='korzina__comm-card'>
                            <p className='korzina-pust'>Корзина пуста</p></div>
                    </div>
                ) : (




                    <div className="korzina__container">
                        <div className="Korzina__text-top">
                            <h2>Корзина</h2>
                        </div>

                        <div className="korzina__comm-card">
                            <div className="kozina__comm-amount">
                                <h2>Общая сумма : <span className='kozina__comm-money'>{cartTotal}$</span></h2>

                                <div className="korzina__making">
                                    <p>Для продолжения нажмите кнопку "оформить заказ"</p>
                                    <Link to={'/decoration'}><div className="kozina__button-oforflenie">

                                        <button className='kozina__making-order-btn'>Оформить заказ</button>
                                    </div></Link>
                                </div>
                            </div>

                            <div className="korzina__comm-products">
                                <div className="korzona__korzina-text">
                                    <p>Фото</p>
                                    <p>Наименование</p>
                                    <p>Цена</p>
                                    <p>Количество:</p>
                                    <p>Общая сумма</p>
                                </div>

                                <div className="korzina-mobile">
                                    <Korzina_mobile />

                                </div>
                                {items.map((item =>

                                    <div className="korzina__product korzina-pk">
                                        <div className="korzina__product-photo">
                                            <img src={item.image} alt={item.image} />

                                        </div>
                                        <div className="korzina-product-title">
                                            <h3>{item.title}
                                            </h3>
                                        </div>
                                        <div className="korzina-product-price">
                                            <h4 >{item.price} ₴ </h4>
                                        </div>
                                        <div className="korzina-product-quanity">
                                            <div className="view__com-quanity ">


                                                <div className="sup-btn">{item.quantity}</div>
                                                <div className="view__quanity-btn">
                                                    <button className="plus minust">
                                                        <i onClick={() => updateItemQuantity(item.id, item.quantity + 1)} class="fa-solid fa-chevron-up fa-xl quanity-arrow"></i>
                                                    </button>
                                                    <button className="plus plust">
                                                        <i onClick={() => handleDecrement(item.id, item.quantity)} class="fa-solid fa-chevron-down fa-xl quanity-arrow " ></i>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="korzina-product-amout">
                                            <h4 >{item.quantity * item.price} ₴ </h4>

                                        </div>
                                        <div className="korzina-product-delete">
                                            <div className="remove"> <i
                                                type="submit"
                                                onClick={() => removeItem(item.id)}
                                                className="fa-solid fa-trash fa-lg"
                                            ></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                )}
                <div className="korzina__poxoj">
                    <h2>Актуальные товары</h2>

                </div>
                <div className="korzina__container2">
                    <div className="row">
                        {array.map((item =>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 sect3__card-gap" key={item.id}>
                                <div className="sect3__card">


                                    <Link to={`/${item.id}`}>
                                        <img src={item.image} alt="" />
                                    </Link>
                                    <div className="sect3__card-text">
                                        <h4>{item.title}</h4>
                                        <div className="sect3__card-bottom-block">
                                            <h4>{item.price} ₴</h4>
                                            <button onClick={() => addItem(item)}>В корзину</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Section4 />
            </section>
            <Footer />

        </div>
    )
}