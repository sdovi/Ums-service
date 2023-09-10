import React, { useContext } from 'react'
import { useCart } from 'react-use-cart'
import { Context } from '../../context'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { Section4 } from '../Section4/Section4'
import './style.scss'

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
                                    <h4 >Цена: {item.price} ₴ </h4>
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
                                <h5 ><span className='korzina__spans'> {item.quantity * item.price} ₴</span> </h5>

                                <div className="remove">

                                    <img src="data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.545%200h5.182c.954%200%201.727.773%201.727%201.727v.864h2.591c.954%200%201.728.773%201.728%201.727v1.727c0%20.954-.774%201.728-1.727%201.728h-.07l-.794%209.5c0%20.954-.774%201.727-1.727%201.727H4.818c-.954%200-1.727-.773-1.724-1.656l-.798-9.571h-.069A1.727%201.727%200%200%201%20.5%206.045V4.318c0-.954.773-1.727%201.727-1.727h2.591v-.864C4.818.773%205.591%200%206.545%200ZM4.818%204.318h-2.59v1.727h13.817V4.318H4.818Zm9.425%203.455H4.03l.79%209.5h8.636l.003-.072.785-9.428Zm-2.516-6.046v.864H6.545v-.864h5.182Z%22%20fill%3D%22%23BDBDCB%22%2F%3E%3C%2Fsvg%3E" onClick={() => removeItem(item.id)} alt="" />
                                </div>
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
                                            <div className="remove">

                                                <img src="data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.545%200h5.182c.954%200%201.727.773%201.727%201.727v.864h2.591c.954%200%201.728.773%201.728%201.727v1.727c0%20.954-.774%201.728-1.727%201.728h-.07l-.794%209.5c0%20.954-.774%201.727-1.727%201.727H4.818c-.954%200-1.727-.773-1.724-1.656l-.798-9.571h-.069A1.727%201.727%200%200%201%20.5%206.045V4.318c0-.954.773-1.727%201.727-1.727h2.591v-.864C4.818.773%205.591%200%206.545%200ZM4.818%204.318h-2.59v1.727h13.817V4.318H4.818Zm9.425%203.455H4.03l.79%209.5h8.636l.003-.072.785-9.428Zm-2.516-6.046v.864H6.545v-.864h5.182Z%22%20fill%3D%22%23BDBDCB%22%2F%3E%3C%2Fsvg%3E" onClick={() => removeItem(item.id)} alt="" />
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
                        {array.map((el =>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 sect3__card-gap" key={el.id}>
                                <div className="sect3__card">


                                    <Link to={`/${el.id}`}>
                                        <img src={el.image} alt="" />
                                    </Link>
                                    <div className="sect3__card-text">
                                        <h4>{el.title}</h4>
                                        <div className="sect3__card-bottom-block">
                                            <h4>{el.price} ₴</h4>
                                            <button onClick={() => addItem(el)}>
                                                
                                                {items.find((item) => item.id === el.id)
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
            </section>
            <Footer />

        </div>
    )
}