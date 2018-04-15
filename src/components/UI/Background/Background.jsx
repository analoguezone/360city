import React from 'react'
import classes from './Background.css';

const background = () => {
  return (
    <div className={classes.fixedBackground} >
    <iframe className={classes.frame} src='https://360city.hu/works/honlap/low/' title='background'/>
    
     <div className={classes.transparentLayer}></div> 
   </div>
  )
}

export default background
