import React from "react";
import classes from "./CardBlock.css";
import Aux from "../../hoc/Aux/Aux";
import EmbedContent from "../EmbedContent/EmbedContent";
import CardFactory from "../CardFactory/CardFactory";
import { Card, Icon } from "semantic-ui-react";
import ScrollableAnchor from "react-scrollable-anchor";
import separator from "../../assests/images/elvalaszto-motivum_1920x1080px_transparent.png";

const CardBlock = props => {
  const data = require("../../assests/data/" + props.header + ".json");

  let align = "left";
  let separatorBlock = "";

  const cardItems = data.References.map((cardItem, index) => {
    align === "right" ? (align = "left") : (align = "right");
    align === "right"
      ? (separatorBlock = (
          <img
            alt="separator"
            className={classes.separatorImg}
            src={separator}
          />
        ))
      : (separatorBlock = "");

    return (
      <Aux>
        <CardFactory
          key={index}
          title={cardItem.title}
          body={cardItem.body}
          embedUrl={cardItem.embedUrl}
          redirectUrl={cardItem.redirectUrl}
          align={align}
          alt={cardItem.title}
        />
        {separatorBlock}
      </Aux>
    );
  });

  return (
    <Aux>
      <ScrollableAnchor id={props.header}>
        <div />
      </ScrollableAnchor>
      <EmbedContent header={props.header} background="bigDark">
        <Card.Group itemsPerRow={props.rowItems} align="left">
          {cardItems}
        </Card.Group>
        <a className={classes.alink} href="#Home">
          
          <Icon size="big" name="arrow circle up" />
        </a>
      </EmbedContent>
    </Aux>
  );
};

export default CardBlock;
