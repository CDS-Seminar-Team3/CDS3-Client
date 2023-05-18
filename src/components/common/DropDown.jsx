import React from 'react';

const DropDown = props => {
  return (
    <article className={`${props.menu ? 'slide-fade-in' : 'slide-fade-out'}`}>
      {props.children && props.visibility}
    </article>
  );
};

export default DropDown;
