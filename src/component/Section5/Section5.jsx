import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './style.scss'

export const Section5 = () => {
    const faqData = [
        { question: "Мочевой будильник реально помогает?", answer: "Для начала скажем так, ДА Помогает но есть проблема, этот будильник одноразовый" },
        { question: "Какая гарантия на будильник?", answer: "Мы с компанией даем вам 5 летнюю гарантию на использование этого будильника" },
        { question: "Терапия энурезным будильником безопасна?", answer: "Терапия энурезным будильником абсолютно безопасна. Не имеет побочных эффектов и не вызывает аллергических реакций. В мочевом будильнике использованы минимальные, не представляющие опасности, значения напряжения и силы тока. Не используется радиочастотное излучение." },
        { question: "Где производятся будильники?", answer: "В стране под названием Узбекистан и в городе Ташкент" },
        { question: "Будильник эффективен для всех?", answer: "Нет, к сожалению, будильник подходит только для детей, возраст которых меньше 10 лет" },
        { question: "Пример развёрнутой вкладки вопроса?", answer: "Нет, к сожалению, будильник подходит только для детей, возраст которых меньше 10 лет" },
    ];

    const [expandedIdx, setExpandedIdx] = useState(null);
    const [answerHeight, setAnswerHeight] = useState(0);

    const toggleAccordion = (index) => {
        if (expandedIdx === index) {
            setExpandedIdx(null);
        } else {
            setExpandedIdx(index);
        }
    };

    useEffect(() => {
        if (expandedIdx !== null) {
            const answer = document.querySelector(`#answer-${expandedIdx}`);
            if (answer) {
                setAnswerHeight(answer.scrollHeight);
            }
        }
    }, [expandedIdx]);

    return (
        <div className="faq-container mb-5">
            <h2>Часто задаваемые вопросы</h2>
            <div className="faq-list mb-5 row">
                {faqData.map((faq, index) => (
                    <div key={index} className={`col-lg-6 col-md-6 col-sm-12 faq-item ${expandedIdx === index ? 'expanded' : ''}`}>
                        <div
                            className={`question ${expandedIdx === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <FaAngleDown
                                className={`icon ${expandedIdx === index ? 'rotated' : ''}`}
                            />
                            <span>{faq.question}</span>
                        </div>
                        <div
                            id={`answer-${index}`}
                            className={`answer ${expandedIdx === index ? 'active' : ''}`}
                            style={{ maxHeight: expandedIdx === index ? `${answerHeight}px` : '0' }}
                        >
                            
                            <h6 className='sect5__otvet'>{faq.answer}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
