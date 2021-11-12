import React from 'react';
import SectionList from "./SectionList";
import {useSelector} from "react-redux";

const SectionListContainer = () => {

    const tags = useSelector(state => state.lessons.tags)

    return (
        <SectionList tags={tags} />
    );
};

export default SectionListContainer;