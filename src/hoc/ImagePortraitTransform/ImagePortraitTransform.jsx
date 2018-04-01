import React from 'react'
import Aux from '../../hoc/Aux/Aux'

const imagePortraitTransform = (props) => {

  let transformedImage = props.children

  if (window.innerWidth / window.innerHeight < 1) {

  //  transformedImage = <div style={{ height: window.innerHeight*0.8, position:"relative", left: (window.innerWidth/2)-(window.innerHeight*0.8*1.77/2) + "px" }}>
  transformedImage = <div style={{ height: window.innerHeight*0.8, position:"relative", left: (window.innerWidth/2)-(window.innerHeight*0.8*1.77/2) + "px" }}>  
      {props.children}
    </div>
  }

  return (
 
    <Aux>{transformedImage}</Aux>
   
  )
}

export default imagePortraitTransform
