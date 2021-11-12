import React from 'react';
import Section from "./Section/Section";

const SectionList = ({tags}) => {

    return (
      <div>
          {tags.map(tag =>
              <Section key={tag.name} tag={tag}/>
          )}
      </div>
    );
};

export default SectionList;