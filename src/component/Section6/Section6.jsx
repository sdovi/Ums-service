import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss';
import x from './img/x.png'
import { Section6mobile } from './Section6mobile'
import img from './img/card1.png'
import img2 from './img/card2.png'
import img3 from './img/card3.png'

const ReviewsCarousel = () => {

    const reviews = [
        {
            name: 'Татьяна Басова',
            date: '06.03.2021',
            text: 'Отличный сервис! Быстро и качественно!'
        },
        {
            name: 'Антонина',
            date: '19.01.2021',
            text: 'Очень довольна работой компании. Рекомендую!'
        },
        {
            name: 'Никита',
            date: '23.12.2020',
            text: 'Все супер! Спасибо!'
        },
        {
            name: 'Никита',
            date: '23.12.2020',
            text: 'Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но пока ещё с будильником,дочка ещё не готова его снимать говорит что для подстраховки,но я рада что рискнула и заказала будильник у нас он прозвенел..'
        },
        {
            name: 'Никита',
            date: '23.12.2020',
            text: 'Да пока помогает этот чудо будильник!!!но хотелось бы беспроводной!!!проводной ребенку немного не удобно но это не важно, родители хотите верьте хотите нет за ети деньги не пожалейте и купите прежде чем кормить таблетками и всякой химией.. !'
        },
        {
            name: 'Никита',
            date: '23.12.2020',
            text: 'Все супер! Спасибо!'
        },
        {
            name: 'Никита',
            date: '23.12.2020',
            text: 'Все супер! Спасибо!'
        }
    ];

    const chunkedReviews = [];
    for (let i = 0; i < reviews.length; i += 3) {
        chunkedReviews.push(reviews.slice(i, i + 3));
    }

    return (
        <div>
            <div className="reviews-carousel  pkversions">
                <h2 className='sect6__otzivi'>Отзывы наших клиентов</h2>
                <Carousel>
                    {chunkedReviews.map((chunk, index) => (
                        <div key={index} className="review-slide">
                            {chunk.map((review, index) => (
                                <div key={index} className="review">
                                    <h3>{review.name}</h3>
                                    <p className="review-date">{review.date}</p>

                                    <img src={x} alt="" className='sect6__x' />
                                    <img src={x} alt="" className='sect6__x' />
                                    <img src={x} alt="" className='sect6__x' />
                                    <img src={x} alt="" className='sect6__x' />
                                    <img src={x} alt="" className='sect6__x' />
                                    <p className='otziv'>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="mobile-sect6">
                <Section6mobile />
            </div>

            <div className="container-footer mb-5">
                <div className="footer">
                    <div className="row footer__block1">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="Footer__box1">
                                <h1>ИНТЕРНЕТ-МАГАЗИН UROMED SERVICE

                                </h1>
                                <p>

                                    UroMed Service - это функциональный и современный сервис, позволяющий быстро и легко приобрести товары медицинской оптики.  <br /> <br />

                                    У компании 15-ти летний опыт в сфере предоставления высококачественных услуг по подбору и продаже оптимальных средств для коррекции зрения: <br /> <br />

                                    • сеть салонов розничной оптики;
                                    • собственные мастерские по изготовлению очков;
                                    • высококвалифицированные и опытные специалисты;
                                    • надежные и проверенные поставщики;
                                    • функциональный и современный сервис онлайн продаж.
                                </p>

                            </div>
                        </div>


                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="Footer__box2">
                                <div className="footer__matial">
                                    <h2>Полезные материалы</h2>

                                </div>
                                <div className="footer__cards">
                                    <div className="footer_card">
                                        <img src={img} alt="" />
                                        <div className="footer__card-text">

                                            <h5>8 шагов по борьбе с энурезом. Советы родителям</h5>
                                            <p>Предлагаем вашему вниманию перевод статьи Министерства здравоохранения Австралии, посвященную проблеме детского и подросткового энуреза..</p>
                                        </div>
                                    </div>
                                    <div className="footer_card">
                                        <img src={img2} alt="" />
                                        <div className="footer__card-text">

                                            <h5>Энурезный будильник.
                                                Как это работает</h5>
                                            <p>Энурезная сигнализация- это устройство, которое пробуждает ребенка, который мочится в постель. Мочевой будильник состоит из закрепленного на белье..</p>
                                        </div>
                                    </div>
                                    <div className="footer_card ">
                                        <img src={img3} alt="" className='Footer-img' />
                                        <div className="footer__card-text">

                                            <h5>Энурезный будильник.
                                                Как выбрать лучший вариант</h5>
                                            <p>Как выбрать энурезный будильник, на что следует обращать внимание, какому прибору отдать предпочтение, чтобы мочевой ..</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
