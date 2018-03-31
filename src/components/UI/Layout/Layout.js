import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Background from '../Background/Background';
import NavBar from  '../NavBar/NavBar';
import classes from './Layout.css';


const layout = (props) => {
  return (
    <Aux>
      <Background />
      <NavBar />
      <main className={classes.container} >
        {props.children}
      </main>
 
    </Aux>
  )
}

export default layout;
