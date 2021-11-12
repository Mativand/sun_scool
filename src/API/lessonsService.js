import {getDataAction} from "../store/dataLessonsReducer";
import {getCurrentLessonInfo} from "../store/dataModalReducer";

export const getLessons = () => {
    return function(dispatch) {
        fetch('https://api.sunscool.org/api/v6/lessons/ru-ru/level1.json')
            .then(response => response.json())
            .then(json => dispatch(getDataAction(json)))
    }
}

export const getLessonInfo = (url) => {
    return function(dispatch) {
        fetch(`https://api.sunscool.org${url}`)
            .then(response => response.json())
            .then(json => dispatch(getCurrentLessonInfo(json)))
    }
}