import React from 'react';
import {useSelector} from "react-redux";
import s from './Section.module.css'
import CardContainer from "./Card/CardContainer";

const Section = ({tag}) => {

    // в массиве lessons будут соответствующие данной секции уроки

    const lessons = useSelector(state => state.lessons.lessons.filter(el => tag.lesson_ids.includes(el.number)))

    return (
        <div className={s.wrapper}>
            <div className={s.section}>
                <div>
                    <span style={{backgroundColor: `${tag.bg_color}`}} className={s.title}>{tag.title}</span>
                </div>
                {lessons.map(lesson =>
                    <CardContainer key={lesson.number} lesson={lesson}/>
                )}
            </div>
        </div>
    );
};

export default Section;