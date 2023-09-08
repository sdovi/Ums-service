import React from 'react'
import './style.scss'
import bg from './img/bg.png'
import photo from './img/photo.png'
import famali from './img/family 1.png'
import famali2 from './img/photo_2021-03-26_12-46-46 1.png'
import logo1 from './img/boxes/Vector (2).svg'
import logo2 from './img/boxes/clarity_certificate-line.svg'
import logo3 from './img/boxes/customer-service 1.svg'
import logo4 from './img/boxes/favorite 1.svg'
import logo5 from './img/boxes/truck 1.svg'
import logo6 from './img/boxes/customer-service 1.svg'
import sertificate from './img/work.png'
import sertificatemb from './img/sertificates2.png'

export const About_block = () => {
    return (
        <div>
            <div className="about__container">
                <div className="Sect_about">
                    <div className="about__location">
                        <h6>Главная страница / </h6>
                        <a href=""> <h6>Отзывы</h6></a>
                    </div>

                    <div className="about__photo">
                        <img src={photo} alt="" />
                    </div>


                    <div className="row about__com-block" >
                        <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: 0 }}>
                            <div className="about__block1">
                                <h2>Uromedservice</h2>
                                <br className='about-br' />
                                <p>Компания uromedservice уже более 9 лет профессионально занимается импортом и продажей на территории Украины энурезных будильников, различных средств ухода и личной гигиены, а так же других сопутствующих товаров, в том числе медицинского назначения!
                                    <br />
                                    <br />
                                    Пройдя свой не малый путь, и досконально изучив всех производителей энурезных будильников, плюсов и минусов каждого конкретного продукта, мы для себя определили приоритетное сотрудничество с такими всемирно известными брендами как Teqin и MoDo-king.
                                    <br />
                                    В данный момент, на протяжении уже более 5 лет, у нас организованы прямые поставки будильников от этих производителей, и наша компания является официальным представителем Teqin и MoDo-king в Украине! Что позволяет нам гарантировать высочайшее качество и самый широкий ассортимент продукции этих брендов на территории Украины, профессиональный сервис и обслуживание наших клиентов, а так же доступные и адекватные цены!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: 0 }}>
                            <div className="about__block2">
                                <img src={bg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="about__comm-famaly-block ">
                    <div className="about__block-famaly-img" >
                        <img src={famali2} alt="" />
                    </div>
                    <div className="about__block-famaly-text">
                        <div className="about__block-famaly-logo famaly-mobile">
                            <img src={famali} alt="" />
                        </div>
                        <p>
                            Мы гордимся тем, что наши товары помогли и продолжают помогать многим Семьям в решении их деликатных вопросов! Мы постоянно учимся чему-то новому и не боимся идти в ногу со временем, расширяем наш ассортимент и совершенствуем качество обслуживания!  <br /> <br />

                            Осознаём, как важно для Вас найти надежный сервис по выбору и покупке энурезных будильников и других сопутствующих товаров, и прилагаем все усилия, что бы стать для Вас именно таким местом.
                        </p>
                        <div className="about__block-famaly-logo famaly-pk">
                            <img src={famali} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mb-5 about__comm-cards-one mt-3">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="about__cards-one">
                            <img src={logo1} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="about__cards-one">
                            <img src={logo2} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="about__cards-one">
                            <img src={logo3} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="about__cards-one">
                            <img src={logo4} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="about__cards-one">
                            <img src={logo5} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="about__cards-one">
                            <img src={logo6} alt="" />
                            <div className="about__cards-text">
                                <h2>Оригинальная и сертифицированная продукция</h2>
                                <p>uromedservice всегда заботится о спокойствии Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem neque totam veniam doloribus quibusdam.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about__com-sertificate">
                    <div className="about__sertificate mb-5">

                        <img src={sertificate} alt="" className='about__sertificate-photo-pk' />
                        <img src={sertificatemb} alt="" className='about__sertificate-photo-mb' />

                    </div>

                </div>
            </div>


 

        </div>
    )
}
