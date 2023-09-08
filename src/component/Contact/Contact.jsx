import React from 'react'
import './style.scss'
import logo1 from './img/Page 1.svg'
import ilon from './img/Mask Group.png'
import { Section4 } from '../Section4/Section4'

export const Contact = () => {
    return (
        <div>
            <div className="contact__container mb-5">
                <div className="about__location">
                    <h6>Главная страница / </h6>
                    <a href=""> <h6>Контакты</h6></a>
                </div>


                <div className="contact__block">
                    <div className="contact__text">
                        <h2>Контакты</h2>
                    </div>
                    <div className="contact__covid">
                        <img src={logo1} alt="" />
                        <p>В связи с распространением коронавирусной инфекции
                            COVID-19 магазин переведен на удаленную работу.
                            <span className='contact__span'>Все заказы принимаются online и по телефону!</span></p>

                    </div>
                </div>


                <div className="contact__contact mt-4">
                    <h3 className='contact__nomer'>+380 66 417 95 83</h3>
                    <h3 className='contact__gmail'>uromed@gmail.com</h3>
                    <h3 className='contact__locateion-txt'>Украина, г. Днепр, ул. Челюскина 12</h3>

                </div>
            </div>
            <Section4 />
            <div className="contact__container mb-2">
                <div className="row contact__location-with-photo">
                    <div className="col-lg-6 col-md-6 col-sm-12 contact__card-location" style={{ padding: 0 }}>
                        <div className="contact__blocklocation1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.69667004235737!2d35.03979829777081!3d48.46471491747563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e6c0ffc80d%3A0xa3ed1699660f3ccb!2z0KTQuNGC0L3QtdGBINGB0YLRg9C00LjRjyAiV0VMTE5FU1Mi!5e0!3m2!1sru!2s!4v1693293681323!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='location-urs'></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: 0 }}>
                        <div className="contact__block2-photo">
                            <img src={ilon} alt="" />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
