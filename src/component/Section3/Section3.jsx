import React from 'react'
import './style.scss'
import img1 from './img/card1.png'
import { Context } from '../../context';
import { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export const Section3 = () => {

    const { array } = useContext(Context)

    const { addItem, items } = useCart();


    return (
        <div>
            <section className='sect3'>
                <div className="sect3__commcard">
                    <div className="container-sect3">
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
                                            <button onClick={() => addItem(item)}> {items.find((el) => el.id === item.id)
                              ? 'Уже в корзине'
                              : 'В корзину'}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    </div>
                </div>

            </section>

        </div>
    )
}
