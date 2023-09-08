import React from 'react'
import './style.scss'
import krug from './img/krug.png'
import kapla from './img/kapla.png'
import bg from './img/back.png'

export const Section2 = () => {
    return (
        <div>
            <section>
                <div className="sect2__backround">
                    <div className="sect2_bg2">
                        <img src={bg} alt="" />
                    </div>
                    <div className="sect2__krug-bg">
                        <div className='sect2__photo-bg'>
                            <img src={krug} alt="" className='sect2__photo-bg-img' />
                            <div class="sect2__text-container">
                                <h1 className="sect2__text-card">Когда
                                    необходимо
                                    использовать энурезный
                                    будильник
                                    ?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="sect2__kapla-comm">
                        <div className="sect2__kapla1">
                            <img src={kapla} alt="" />
                            <p>Ваш ребенок старше 6 лет
                                и он часто оставляет постель
                                мокрой после ночного сна
                            </p>
                        </div>
                        <div className="sect2__kapla1">
                            <img src={kapla} alt="" />
                            <p>Вашего ребенка беспокоит, что он мочится в кровать (даже если он младше 6 лет)
                            </p>
                        </div>
                        <div className="sect2__kapla1">
                            <img src={kapla} alt="" />
                            <p>Ваш ребенок снова начал мочиться в кровать после нескольких сухих недель
                            </p>
                        </div>
                    </div>

                    <div className="sect2__kapla-comm">
                        <div className="sect2__kapla2">
                            <img src={kapla} alt="" />
                            <p>Вы наказываете или замечаете, что хотите наказать своего ребенка за ночное недержание мочи

                            </p>
                        </div>
                        <div className="sect2__kapla2">
                            <img src={kapla} alt="" />
                            <p>Ваш ребенок может намочить
                                белье даже во время
                                дневного бодрствования
                            </p>
                        </div>
                        <div className="sect2__kapla2">
                            <img src={kapla} alt="" />
                            <p>Ваш ребенок может намочить
                                белье даже во время
                                дневного бодрствования
                            </p>
                        </div>
                    </div>


                </div>

            </section>




        </div>
    )
}
