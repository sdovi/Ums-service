import React from 'react'
import './style.scss'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import bg from './img/bg.png'
import youtube from './img/youtube.png'
import logo1 from './img/boxes/1.svg'
import logo2 from './img/boxes/2.png'
import logo3 from './img/boxes/3.png'
import logo4 from './img/boxes/4.png'
import logo5 from './img/boxes/5.png'
import logo6 from './img/boxes/6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export const Section1 = () => {
    useEffect(() => {
      AOS.init();
    }, []);

    return (
        <section>
            <div className="sect1_box-photo-container">
                <div className="sect1_box-photo">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>

            <div className="container2">
                <div className="sect1__box2 mt-5 mb-5" >
                    <div className="sect1__cards-comm">
                        <div className="sect1__row">
                            <div className="sect1__card1">
                                <div className="sect1__card1-bg">
                                    <img src={bg} alt="" />
                                </div>
                                <div className="sect1__card1-text">
                                    <h2>Мочевой Будильник</h2> <br className='sect1__br1' />
                                    <p>
                                        Энурезный или мочевой будильник- это устройство, которое позволит избавиться от энуреза без медикаментов и неприятных процедур. <br /> <br />

                                        Будильник состоит из датчика, чувствительного к влаге, который встроенным зажимом крепится на трусиках и гибким проводом соединяется с блоком сигнализации, закрепленным эластичной лентой на руке ребенка. <br /> <br />

                                        При попадании первой капли жидкости на белье, энурезный будильник срабатывает и звуковым, световым и вибросигналом будит маленького соню. Ребенок перестает мочиться в кровать, отключает будильник и заканчивает мочеиспускание в туалете. Со временем вырабатывается стойкий рефлекс- просыпаться при первых позывах к мочеиспусканию. Проблема ночного энуреза уходит навсегда!

                                    </p>

                                    <button className='sect1_card1-btn'>
                                        Купить будильник
                                    </button>

                                </div>

                            </div>
                            <div className="sect1_card2">
                                <h3>Обзор нашего энурезного будильника MoDo-king MA-108
                                    Доктором Комаровским</h3>

                                <img src={youtube} alt="" />

                                <button className='sect1__btn'>Часто задаваемые вопросы</button>




                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className="sect1__6-boxes mb-5">
                    <div className="row sect1__6-com-box">
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card">
                                <img src={logo1} alt="" />
                                <p>Самый широкий ассортимент энурезных будильников</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card">
                                <img src={logo2} alt="" />
                                <p>Гарантийное
                                    и послегарантийное обслуживание </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card">
                                <img src={logo3} alt="" />
                                <p> Только
                                    оригинальная
                                    продукция</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card">
                                <img src={logo4} alt="" />
                                <p>Официальные представители
                                    Teqin и MoDo-king
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card">
                                <img src={logo5} alt="" />
                                <p>Профессиональная консультация специалиста</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="sect1__6-card sect1__6-end">
                                <img src={logo6} alt="" />
                                <p>Удобная и быстрая оплата и доставка товара</p>
                            </div>
                        </div>

                    </div>
                </div>
        </section>


    )
}

