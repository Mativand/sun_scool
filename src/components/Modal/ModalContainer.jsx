import React from 'react';
import Modal from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {toggleVisibleAction} from "../../store/dataModalReducer";
import s from "./Modal.module.css";

const ModalContainer = () => {

    const visible = useSelector(state => state.modal.visible)
    const dispatch = useDispatch();

    const offVisible = () => {
        dispatch(toggleVisibleAction(false))
    }

    const rootClasses = [s.modal]
    if (visible) {
        rootClasses.push(s.active)
    }

    const lesson = useSelector(state => state.modal.currentLesson)

    return (
        <div>
            {lesson
                ? <Modal title={lesson.title}
                         textRefs={lesson.bible.bible_texts}
                         offVisible={offVisible}
                         rootClasses={rootClasses}
                />
                : <div></div>
            }
        </div>
    );
};

export default ModalContainer;