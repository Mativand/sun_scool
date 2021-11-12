import s from '../components/Modal/Modal.module.css'

const defaultState = {
    rootClasses: [s.modal],
    visible: false,
    currentLesson: null,
}

const TOGGLE_VISIBLE = "TOGGLE_VISIBLE"
const GET_CURRENT_LESSON = "GET_CURRENT_LESSON"

export const dataModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TOGGLE_VISIBLE":
            return {...state, visible: action.payload}
        case "GET_CURRENT_LESSON":
            return {...state, currentLesson: action.payload}
        default:
    }
    return state
}

export const toggleVisibleAction = (payload) => ({type: TOGGLE_VISIBLE, payload: payload})
export const getCurrentLessonInfo = (payload) => ({type: GET_CURRENT_LESSON, payload: payload})


