import React from "react";
import { Card } from "semantic-ui-react";
import classes from "./CardFactory.css";
import Aux from "../../hoc/Aux/Aux";
import VisibilityControl from '../../hoc/VisibilityControl/VisibilityControl';

const cardFactory = props => {
  const cardItem = (
    <Aux>
      <Card
        href={props.redirectUrl}
        className={[classes.container, classes.blackBorder].join(" ")}
        alt={props.title}
      >
      <VisibilityControl animationType='browse'  animationDuration='1000' >    
      <div className={classes.blockingLayer}>
        <iframe
            className={classes.frame}
            src={props.embedUrl}
            title={props.title}
          />
          <div className={classes.transparentLayer} />
        </div>
        </VisibilityControl>
        <Card.Content>
        <VisibilityControl animationType={'slide ' + props.align}   animationDuration='500' >  
        <Card.Header
            style={{
              color: "#72AB02",
              fontSize: "28px",
              fontWeight: "bold",
              margin: "30px 5px",
              lineHeight: "120%",
              textAlign: props.align
            }}
          >
            {props.title}
          </Card.Header>
          </VisibilityControl>
          <VisibilityControl animationType={'fly ' + props.align }   animationDuration='1000' >
            <Card.Description
              style={{
                color: "#999999",
                fontSize: "20px",
                margin: "30px 5px",
                lineHeight: "120%",
                textAlign: props.align
              }}
            >
              {props.body}
            </Card.Description>
          </VisibilityControl>
        </Card.Content>
      </Card>
    </Aux>
  );

  return !props.title ? null : cardItem;
};
export default cardFactory;
