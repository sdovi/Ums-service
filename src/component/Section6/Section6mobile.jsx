import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss';
import x from './img/x.png'


export const Section6mobile = () => {



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
  for (let i = 0; i < reviews.length; i += 1) {
    chunkedReviews.push(reviews.slice(i, i + 1));
  }

  return (
    <div className="reviews-carousel mb-5">
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
  );
}
