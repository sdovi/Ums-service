import React from 'react'
import './style.scss'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import img from './img/card1.png'
import img2 from './img/card2.png'
import img3 from './img/card3.png'
import { Context } from '../../context';
import { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export const Products = () => {

    const { addItem, items, removeItem } = useCart();

    const items_dropdown = [
        {
            label: <a href="">Сначало старые</a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <a href="">Сначало новые</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: 'Хиты',
            key: '3',
        },
    ];
    const { array, setValue, FilteredProducts } = useContext(Context)
    return (
        <div>
            <div className="Product__container pb-5">
                <div className="about__location">
                    <h6>Главная страница / </h6>
                    <a href=""> <h6>Контакты</h6></a>
                </div>

                <div className="Product__text-top">
                    <h2>Все продукты</h2>
                </div>

                <div className="Product__comm-block">
                    <div className="Product__filter pb-5">
                        <p>Сортировать:</p>
                        <Dropdown
                            menu={{
                                items: items_dropdown,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>

                                    <button className='Product__filter-btn
                                    '>Сначало популярные <DownOutlined className='Prodcut__arrow' /></button>
                                </Space>
                            </a>
                        </Dropdown>
                        <div className="search-container">
                            <input type="text" placeholder="Поиск" onChange={(event) => setValue(event.target.value)} />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>

                    <div className="row mb-5">
                        {FilteredProducts.map((el) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 col-6 pt-4" key={el.id}>
                                <div className="Product__card">

                                    <Link to={`/${el.id}`}>
                                        <img src={el.image} alt={el.image} /></Link>
                                    <div className="Product__card-text">
                                        <h5>{el.title}</h5>
                                        <div className="Product__card-text-bottom">
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

                <div className="Product__seo-text mt-5">
                    <h3 className='Seo-text pb-3'>Блок для SEO текста
                    </h3>
                    <p>

                        Для комфортного использования техники целесообразно купить защитные очки для работы за компьютером. Сделать это рекомендуется людям, проводящим за монитором много часов, вне зависимости от остроты зрения. Очки для компьютера повышают четкость изображения, убирают блики, нейтрализуют эффект мерцания монитора. Линзы с диоптриями обеспечивают необходимую коррекцию.
                        Интернет-магазин «Крот шоп» предлагает разнообразную оптическую продукцию.Зная состояние своего зрения, подобрать необходимую модель несложно.
                    </p>
                    <h4 className='product__time-text pb-1'>
                        Это временный текст
                    </h4>
                    <p>
                        Использование неподходящих линз при постоянном взаимодействии с монитором может усугубить проблемы со здоровьем глаз. Выбирать специальные очки для работы за компьютером стоит после консультации с офтальмологом.
                        В продаже имеются разнообразные модели таких очков:
                        <br />
                        с покрытием, поглощающим электромагнитные волны;
                        с антирефлексным слоем, эффективно снижающим степень отражения.
                        На всю продукцию предоставляются сертификаты качества.</p>
                    <h3 className='primer__text pb-3'>

                        Пример подзаголовка
                    </h3>
                    <p>
                        Одним из плюсов заказа компьютерных очков на сайте интернет-магазина Крот.Шоп является удобная и бережная доставка. Мы доставляем наши товары по всей России, как в крупные города, такие как: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Нижний Новгород, Казань, так и в любой город, где есть пункт выдачи одной из наших транспортных компаний или Почты России. Заказав у нас очки для компьютера Вы можете быть уверены, что мы тщательно упакуем вашу покупку и в кратчайшие сроки передадим ее транспортной компании. Быстрая и бережная доставка – важная составляющая часть нашей работы.
                    </p>
                </div>

            </div>
        </div>
    )
}
