import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import {getLessons} from "./API/lessonsService";
import {useDispatch} from "react-redux";
import SectionListContainer from "./components/SectionList/SectionListContainer";
import ModalContainer from "./components/Modal/ModalContainer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(getLessons()), [])

    return (
        <div className="app">
            <ModalContainer/>
            <SectionListContainer/>
        </div>
    )
}

export default App;
