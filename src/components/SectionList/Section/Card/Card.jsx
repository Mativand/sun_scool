import React from 'react';
import s from './Card.module.css';

const Card = ({img, number, showLessonInfo}) => {

    return (
        <div className={s.card} onClick={showLessonInfo}>
            <div className={s.top}>#{number}</div>
            <img src={`https://api.sunscool.org/lessons/icons/level1/raster/256/${img}`} alt=""/>
            <div className={s.bottom}>1/1</div>
        </div>
    );
};

export default Card;