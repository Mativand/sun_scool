import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {dataLessonsReducer} from "./dataLessonsReducer";
import {dataModalReducer} from "./dataModalReducer";


const rootReducer = combineReducers({
    lessons: dataLessonsReducer,
    modal: dataModalReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

