import React from 'react';

import classes from './EmbedContent.css';


const embedContent = (props) => {
  return (
    <div className={classes[props.backGround]}>
      <div className={classes.container} >{props.children}</div>
    </div>
  )
}

export default embedContent;
