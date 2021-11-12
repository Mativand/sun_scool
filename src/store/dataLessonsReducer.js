
const initialState = {
    lessons: [],
    tags: []
}

const GET_DATA = "GET_DATA"

export const dataLessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                state, lessons: [
                    ...action.payload.lessons,
                    ...action.payload["lessons_v6.1"],
                    ...action.payload["lessons_v6.2"],
                    ...action.payload["lessons_v6.3"]
                ],
                tags: action.payload.tags
            }
        default:
    }
    return state
}

export const getDataAction = (payload) => ({type: GET_DATA, payload: payload})