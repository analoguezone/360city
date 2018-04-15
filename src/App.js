import React, { Component } from "react";
import Layout from "./components/UI/Layout/Layout";
import EmbedContent from "./components/EmbedContent/EmbedContent";
import openingScreen from "./assests/images/kezdo-jav_1920x1080px_transparent.png";
import second from "./assests/images/oldal-2-sziget_1920x1080px_transparent.png";
import third from "./assests/images/oldal-3_1920x1080px_transparent.png";
import sixth from "./assests/images/oldal-6_1920x1080px_transparent.png";
import seventh from "./assests/images/oldal-7_1920x1080px_transparent.png";
import footer from "./assests/images/zaro_1920x1080px_transparent.png";
import "./App.css";
//import classes from './Custom.css';
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import CardBlock from "./components/CardBlock/CardBlock";
import { Transition, Visibility } from "semantic-ui-react";
import VisibilityControl from "./hoc/VisibilityControl/VisibilityControl";
import TwoRowCardBlock, {
  ThreeRowCardBlock,
  FourRowCardBlock
} from "./components/CardBlock/twoRowCardBlock";
import FooterControl from "./hoc/FooterControl/FooterControl";
import ImageMotion from "./hoc/ImageMotion/ImageMotion";
import {Helmet} from "react-helmet";

class App extends Component {
  state = {
    opacity: 1,
    xOffset:0,
    calculations: {
      direction: "none",
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,

    }
  };

  componentDidMount = () => {};

  handleUpdate = (e, { calculations }) => {
    let param = 1 - calculations.percentagePassed * 1.4;

    if (calculations.onScreen) {
      this.setState({ opacity: param });
    }
  };

  handleOnPassed = (e, { passed }) => {
    this.setState({ passed });
    this.setState({ opacity: 0.001 });
  };

  // <div style={{position: 'fixed',color:'white', top:'500px' }} ><h1> Percent Passed: {calculations.percentagePassed.toFixed(2)} opacity: {this.state.opacity.toFixed(2)} onPassed: {this.state.bottomPassed} </h1></div>
  render() {
    configureAnchors({ offset: -20, scrollDuration: 1000 });

    if (window.innerWidth >1600 ) {
      this.setState(prevState => {
        if (prevState.windowWidth!==window.innerWidth) {
          return {
            windowWidth:window.innerWidth,
            xOffset: (window.innerWidth-1615)/2
          };
        }
       
      });
    }

    return (

      <Layout>
        <Helmet>
          <meta charset="UTF-8"/>
          <title>VR 360 City</title>
          <meta name="description" content="Free Web tutorials" />
          <link rel="canonical" href="http://360city.hu/"/>>
        </Helmet>

        <ScrollableAnchor id="Home">
          <div />
        </ScrollableAnchor>

        <EmbedContent fixed="fixed" onTop="onTop" xOffset={this.state.xOffset}>
          <Transition animation="drop" duration={1500}>
            <ImageMotion forceZoom noMotion>
              <img
                
                style={{ opacity: this.state.opacity,
                  transform:
                  "translate("+this.state.xOffset+"px, 0px)"
                 }}
                src={openingScreen}
                alt="Benefi your bussines"
              />
            </ImageMotion>
          </Transition>
        </EmbedContent>
        <EmbedContent>
          <Visibility
            onUpdate={this.handleUpdate}
            onOffScreen={this.handleOnPassed}
          >
            <div style={{ paddingTop: window.innerHeight * 0.9 + "px" }} />
          </Visibility>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <ImageMotion>
            <VisibilityControl>
              <img src={third} alt="Benefit your bussines" />
            </VisibilityControl>
          </ImageMotion>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <ImageMotion>
            <VisibilityControl>
              <img src={second} alt="Your customers will see" />
            </VisibilityControl>{" "}
          </ImageMotion>
        </EmbedContent>

        <EmbedContent background="">
          <ImageMotion>
            <VisibilityControl>
              <img src={sixth} alt="Benefi your bussines" />
            </VisibilityControl>
          </ImageMotion>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <ImageMotion>
            <VisibilityControl>
              <img src={seventh} alt="Benefi your bussines" />
            </VisibilityControl>
          </ImageMotion>
        </EmbedContent>

        <CardBlock header="References" rowItems="2" align="left" />

        <TwoRowCardBlock header="Tours" align="center" />
        <ScrollableAnchor id="Contact">
          <div />
        </ScrollableAnchor>
        <FooterControl xOffset={this.state.xOffset}>
          <ImageMotion forceZoom noMotion>
            <img  src={footer} alt="VR 360 LLC." />
          </ImageMotion>
        </FooterControl>
      </Layout>
    );
  }
}

export default App;
