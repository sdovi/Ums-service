import React from 'react'
import './style.scss'
import lady from './img/lady.png'

export const Header = () => {
    return (
        <div >
            <header>
                <div className="container-fluid header">
                    <div className="header__comm-box">
                        <div className="header__box1">
                            <h1>Энурузный <br />
                                будильник</h1>
                            <p>- эффективное средство <br /> при энурезе</p>
                        </div>
                        <div className="header__box2">
                            <img src={lady} alt="" />
                        </div>

                    </div>

                </div>
            </header>
        </div>
    )
}
