import React from 'react';

import classes from './EmbedContent.css';


const embedContent = (props) => {
 let headerText='';
 props.header ?  headerText = <p>{props.header}</p>: null

  return (
   // <div className={classes[props.backGround]}>
   <div>
   <div className={classes.embedContentHeader} >{headerText}</div>
      <div className={[
        classes.container,
        classes[props.fixed],
        classes[props.onTop],
        classes[props.background]].join(' ')} >
      
      {props.children}</div>
    </div>
   // </div>
  )
}

export default embedContent;
