import React from 'react'
import './style.scss'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';

export const Navbar = () => {
    const items = [
        {
            label: <Link to={'/product'}><li><a class="dropdown-item drop-text" href="#">ЭНУЗЕРНЫЕ БУДИЛЬНИКИ</a></li></Link>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to={'/product'}><li><a class="dropdown-item drop-text" href="#">ПУЛЬСОКСИМЕТРЫ</a></li></Link>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to={'/product'}><li><a class="dropdown-item drop-text" href="#">ТЕРМОМЕТРЫ</a></li></Link>,
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to={'/product'}><li><a class="dropdown-item drop-text" href="#">НЕПРОМОКАЕМЫЕ</a></li></Link>,
            key: '3',
        },
    ];





    const [isModalOpen, setIsModalOpen] = useState(false);
    const { totalUniqueItems } = useCart();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // api post


    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.reload()

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/short-order/', {
                title: name,
                phone: number,
            });

            // Обработка успешного ответа от сервера
            console.log('Успешно отправлено:', response.data);
        } catch (error) {
            // Обработка ошибки
            console.error('Ошибка:', error);
        }
    };
    // api post-end
    return (
        <div>
            <div className="banner-top">
                <h5>Доставка в любой город Украины</h5>

            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid common">
                    <Link to={'/'}><img src={logo} alt="" className='Logonavbar' /></Link>



                    <div className="katalogs__mobile">

                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <h5 class=" btn-secondary katalogs__mobileh5" >Каталог</h5>
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                    <div className="nav__korzina nav__korzina-mb">
                            <Link to={'/korzina'}><i class="fa-solid fa-basket-shopping fa-xl"></i></Link>
                            <sup className='sup'>{totalUniqueItems}</sup>
                        </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <div className="nav__bottom-block m-auto ">





                            <div className="common__box common__box-mobile">


                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <h5 class=" btn-secondary " >Каталог</h5>
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>


                                <Link to={'/about'}><h5 className='contack-link'>Гарантия</h5></Link>
                                <Link to={'/product'}><h5 className='contack-link'>Оплата и доставка</h5></Link>
                                <Link to={'/contact'}><h5 className='contack-link'>Отзывы</h5></Link>
                                <Link to={'/product'}><h5 className='contack-link'>Акции</h5></Link>
                                <Link to={'/about'}><h5 className='contack-link'>Cтатьи</h5></Link>
                                <Link to={'/about'}><h5 className='contack-link'>О нас</h5></Link>
                                <Link to={'/contact'}><h5 className='contack-link'>Контакты</h5></Link>
                            </div>






                            <div className="common__box obratniy-zvonok">
                                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li class="nav-item nav__phone">
                                        <i class="fa-solid fa-phone fa-lg"></i>
                                        <h6>+380 66 417 95 83</h6>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link zvon" href="#" onClick={openModal} >ОБРАТНЫЙ ЗВОНОК</a>
                                    </li>
                                    <li class="nav-item time">
                                        <a class="nav-link zvon vrema" href="#">
                                            <i class="fa-solid fa-clock fa-lg time-icon"></i>ПН-ПТ: 10-19
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li class="nav-item user">
                                        <h6>• СЕЙЧАС НА САЙТЕ: 23 ПОКУПАТЕЛЯ</h6>
                                    </li>
                                </ul>
                                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li class="nav-item language">
                                        <h6>UA</h6>
                                        <h6>RU</h6>
                                    </li>
                                </ul>

                            </div>
                            <hr className='hr' />
                            <div className="common__box common__box-pk">

                                {/* <div class="dropdown">
                                    <ul class="dropdown-menu">
                                        <Link to={'/product'}><li><a class="dropdown-item drop-text" href="#">ЭНУЗЕРНЫЕ БУДИЛЬНИКИ</a></li></Link>
                                        <li><a class="dropdown-item drop-text" href="#">ПУЛЬСОКСИМЕТРЫ</a></li>
                                        <li><a class="dropdown-item drop-text" href="#">ТЕРМОМЕТРЫ</a></li>
                                        <li><a class="dropdown-item drop-text" href="#">НЕПРОМОКАЕМЫЕ ПЕЛЕНКИ</a></li>
                                        <li><a class="dropdown-item" href="#">НЕБУЛАЙЗЕРЫ</a></li>
                                    </ul>
                                </div> */}
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <h5 class=" btn-secondary " >Каталог</h5>
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>

                                <Link to={'/about'}><h5 className='contack-link'>Гарантия</h5></Link>
                                <Link to={'/decoration'}><h5 className='contack-link'>Оплата и доставка</h5></Link>
                                <Link to={'/contact'}><h5 className='contack-link'>Отзывы</h5></Link>
                                <Link to={'/product'}><h5 className='contack-link'>Акции</h5></Link>
                                <Link to={'/about'}><h5 className='contack-link'>Cтатьи</h5></Link>
                                <Link to={'/about'}><h5 className='contack-link'>О нас</h5></Link>
                                <Link to={'/contact'}><h5 className='contack-link'>Контакты</h5></Link>
                            </div>
                        </div>
                        <div className="nav__korzina nav__korzina-pk">
                            <Link to={'/korzina'}><i class="fa-solid fa-basket-shopping fa-xl"></i></Link>
                            <sup className='sup'>{totalUniqueItems}</sup>
                        </div>
                    </div>
                </div>
            </nav>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-container" data-aos="zoom-in-up">
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>&times;</button>
                            <div className="modal-form">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Номер"
                                        value={number}
                                        onChange={handleNumberChange}
                                    />
                                    <button type="submit">Позвоните мне</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

