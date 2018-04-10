import React, { Component } from "react";
import classes from "./ImageMotion.css";

export class imageMotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      windowWidth: 0,
      imageCenter: 0,
      canvasHeight: 0,
      canvasWidth: 0,
      motionGamma: 0,
      toggleZoom: this.props.forceZoom
    };
  }

  componentDidMount() {
    this.updateCanvas();
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.onTilt, false);
    }
    window.addEventListener("resize", this.updateCanvas, false);
  }

  componentWillUnmount = () => {
    window.removeEventListener("deviceorientation", this.onTilt);
    window.removeEventListener("resize", this.updateCanvas);
  };

  componentWillUpdate() {
    // ha valtozik az orientacio akkor ujrapozicionalja a kepet
    if (window.innerWidth !== this.state.windowWidth) {
      this.updateCanvas();
    }
  }

  onTilt = motion => {
 
    if (this.props.noMotion) {
      return;
    }

    let tiltAmount = 0;
    

    //dolesszog szerinti pozicionalas a kepen, a kilogo szelek mertekeig -50 pixel

    if (motion.gamma < -5) {
      tiltAmount = (window.innerWidth - this.state.canvasWidth + 50) / 2;
    }
    if (motion.gamma > 5) {
      tiltAmount = -(window.innerWidth - this.state.canvasWidth + 50) / 2;
    }

    this.setState(prevState => {
      return {
        motionGamma: tiltAmount.toFixed(1),
        windowHeight: prevState.windowHeight,
        windowWidth: prevState.windowWidth,
        imageCenter: prevState.imageCenter,
        canvasHeight: prevState.canvasHeight,
        canvasWidth: prevState.canvasWidth
      };
    });
  };

  // kep inicializalas 80%-os magassagra a keparany megtartasa mellet

  updateCanvas = () => {
    if (window.innerWidth == this.state.windowWidth) {
      return;
    }

    let canvasHeight = window.innerHeight * 0.8;
    let canvasWidth = canvasHeight * 1.77;
    let imageCenter = (window.innerWidth - canvasWidth) / 2;

    this.setState(prevState => {
      return {
        motionGamma: prevState.motionGamma,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        imageCenter: imageCenter,
        canvasHeight: canvasHeight,
        canvasWidth: canvasWidth
      };
    });
  };


  toggleZoom = () => {
    if (this.props.forceZoom) {
      return;
    }
    this.setState({ toggleZoom: !this.state.toggleZoom });
  };

  render() {
    // a kep canvas beallitasa a rotaion sensor eseten mindig a megfelelo meretre
    // a keparany mellet ami ebben az esetben 1920*1080
    
    let motionCanvas = <div>{this.props.children}</div>;

    //ha portrait nezetben van, es be van kapcsolva a zoom, akkor indul a motion canvas

    if (window.innerWidth / window.innerHeight < 1 && this.state.toggleZoom) {
      motionCanvas = (
        <div
          className={classes.container}
          style={{
            height: this.state.canvasHeight,
            width: this.state.canvasWidth,
            left: this.state.imageCenter,
            transform: "translate(" + this.state.motionGamma + "px,0)"
          }}
        >
          {this.props.children}
        </div>
      );
    }

    return <div onClick={() => this.toggleZoom()}>{motionCanvas}</div>;
  }
}

export default imageMotion;
