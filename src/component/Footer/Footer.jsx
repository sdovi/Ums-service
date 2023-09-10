import React from 'react'
import './style.scss'
import logo from './img/logo.svg'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

export const Footer = () => {
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

    return (
        <div>
            

            <div className="footer__pk">
                <footer>
                    <div className="footer-container-bottom">
                        <div className="footer-bottom-block">
                            <img src={logo} alt="" />
                            
                            <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <h5 class="  contack-link2" >Каталог</h5>
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            <h4>Гарантия</h4>
                            <h4>Оплата и доставка</h4>
                            <h4>Отзывы</h4>
                            <h4>Акции</h4>
                            <h4>О нас</h4>
                            <h4>Контакты</h4>
                            <div className="footer__bottom-block-end">
                                <h4>+380 66 417 95 83</h4>
                                <h5>Обратный звонок</h5>
                                <h6><a class="nav-link zvon vrema" href="#">
                                    <i class="fa-solid fa-clock fa-lg time-icon"></i>ПН-ПТ: 10-19</a></h6>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <footer>
                <div className="footer-mobile">
                    <div className="footer-container-bottom">
                        <div className="row footer-bottom-block">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="footer__text-bottom">

                                    <h4>Гарантия</h4>
                                    <h4>Оплата и доставка</h4>
                                    <h4>Отзывы</h4>

                                    <h4>Акции</h4>
                                    <h4>О нас</h4>
                                    <h4>Контакты</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">

                                <div className="footer__bottom-block-end">
                                    <img src={logo} alt="" />
                                    <h4>+380 66 417 95 83</h4>
                                    <h5>Обратный звонок</h5>
                                    <h6><a class="nav-link zvon vrema" href="#">
                                        <i class="fa-solid fa-clock fa-lg time-icon"></i>ПН-ПТ: 10-19</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}
