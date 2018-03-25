import React from 'react'
import classes from './CardBlock.css'
import Aux from '../../hoc/Aux/Aux'
import EmbedContent from '../EmbedContent/EmbedContent';
import ShowBlock from '../ShowBlock/ShowBlock';
import { Card, Icon} from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';



 const CardBlock = (props) => {
  


 
    const data = require('../../assests/data/'+ props.header+'.json')

    const cardItems = data.References.map((cardItem,index) => {
      return <ShowBlock 
        key={index}
        title= {cardItem.title}
        body= {cardItem.body}
        embedUrl={cardItem.embedUrl}
        redirectUrl={cardItem.redirectUrl}
      />
    })

    

   

    return (
    
      <Aux>

        <ScrollableAnchor id={props.header}><div></div></ScrollableAnchor>
          <EmbedContent backGround='bigDark'>
            <div className={classes.embedContentHeader} ><p>{props.header}</p></div>
            <Card.Group  itemsPerRow={2}> 
              {cardItems}  
            </Card.Group>
            <a className={classes.alink} href='#Home'> <Icon size='big' name='arrow circle up' /></a>
            </EmbedContent>
        </Aux>
    )
  }


export default CardBlock;
