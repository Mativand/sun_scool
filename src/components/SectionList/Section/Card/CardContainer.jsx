import React from 'react';
import Card from "./Card";
import {toggleVisibleAction} from "../../../../store/dataModalReducer";
import {useDispatch} from "react-redux";
import {getLessonInfo} from "../../../../API/lessonsService";

const CardContainer = ({lesson}) => {

    // некоторые поля ошибочно имеют формат jpg, из-за чего с бэка приходит ошибка
    // проблема решена с помошью изменения jpg на png

    const regex = /jpg$/

    let image = lesson.icon.raster

    if (lesson.icon.raster.includes('jpg')) {
        image = lesson.icon.raster.replace(regex, 'png')
    }

    const number = lesson.number

    const dispatch = useDispatch();
    const showLessonInfo = () => {
        dispatch(getLessonInfo(lesson.url))
        dispatch(toggleVisibleAction(true))
    }

    return (
        <Card img={image} number={number}  showLessonInfo={showLessonInfo}/>
    );
};

export default CardContainer;