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
import ImagePortraitTransform from "./hoc/ImagePortraitTransform/ImagePortraitTransform"


class App extends Component {
  state = {
    opacity: 1,
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
      offScreen: false
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

    return (
      <Layout>
        <ScrollableAnchor id="Home">
          <div />
        </ScrollableAnchor>

        <EmbedContent fixed="fixed" onTop="onTop">
          <Transition animation="drop" duration={1500}>
            <img
              style={{ opacity: this.state.opacity}}
              src={openingScreen}
              alt="Benefi your bussines"
             

            />
          </Transition>
        </EmbedContent>
        <EmbedContent>
          <Visibility
            onUpdate={this.handleUpdate}
            onOffScreen={this.handleOnPassed}
          >
            <div style={{ paddingTop: 100 / 1.83 + "%" }} />
          </Visibility>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <VisibilityControl>
            <ImageMotion>
              <img src={third} alt="Benefit your bussines" />
            </ImageMotion>
          </VisibilityControl>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <VisibilityControl>
          <ImageMotion>
            <img src={second} alt="Your customers will see" />
            </ImageMotion>
          </VisibilityControl>
        </EmbedContent>

        <EmbedContent background="">
          <VisibilityControl>
          <ImageMotion>
            <img src={sixth} alt="Benefi your bussines" />
            </ImageMotion>
          </VisibilityControl>
        </EmbedContent>

        <EmbedContent background="bigDark">
          <VisibilityControl>
          <ImageMotion>
            <img src={seventh} alt="Benefi your bussines" />
            </ImageMotion>
          </VisibilityControl>
        </EmbedContent>

        <CardBlock header="References" rowItems="2" align="left" />

        <TwoRowCardBlock header="Tours" align="center" />

        <FooterControl>
       
        <img style={{width: "100%"}} src={footer} alt="VR 360 LLC." />
   
          
        </FooterControl>
      </Layout>
    );
  }
}

export default App;
