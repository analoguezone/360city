import React from 'react';
import { Card } from 'semantic-ui-react';
import classes from './ShowBlock.css';
import Aux from '../../hoc/Aux/Aux';

const showBlock = (props) => {
  
const cardItem = (
  <Aux>
    <Card className={classes.container} >
    <div className={classes.blockingLayer}>
      <iframe className={classes.frame} 
        src={props.embedUrl}
        title={props.title}
        />
      <div className={classes.transparentLayer}></div>
    </div>
      <Card.Content>
        <Card.Header style={{color: '#72AB02',fontSize:'30px' }} >
        {props.title} 
        </Card.Header>
        <Card.Description style={{color: '#898989'}}>
        {props.body}
        </Card.Description>
      </Card.Content>
    </Card>
  </Aux>
)



return !props.title ? null : cardItem
  

}
export default showBlock
