import React, { Component } from "react";
import Aux from "../Aux/Aux";

export class footerControl extends Component {
  state = {
    opacity: 0.01,
    windowHeight: ""
    
  };

  componentDidMount = () => {
    let ref = this.watchDiv;
    this.setState(prevState => {
      return {
        opacity: prevState.opacity,
        windowHeight: ref.clientHeight,
        fixedPosition: window.innerHeight
    
      };
    });

    window.addEventListener("scroll", this.onScroll);

    // window.addEventListener('devicemotion', this.deviceMotion);
  };

  onScroll = () => {
    //console.log(this.watchDiv.getBoundingClientRect())
    const rect = this.watchDiv.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    let offsetZero = windowHeight - rect.height
    let pixelShow = offsetZero + rect.height - rect.y;
    let percentageTo = pixelShow/ rect.height;
    
    if (percentageTo>0 && percentageTo <1) {
      this.setState(prevState => {
        return {
          opacity: percentageTo.toFixed(2),

          windowHeight: rect.height,
          fixedPosition: windowHeight

        };
      });
    }
    console.log("opacity: " + this.state.opacity + "rectHeight: " + this.state.windowHeight  );
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };


  render() {

    return (
      <Aux>
        <div>

          <div
            style={{
              transform: "translate(0, " + -(this.state.opacity*(this.state.windowHeight/1.8)) + "px)",
              opacity: this.state.opacity,
              backgroundColor: "rgba(0,0,0," + this.state.opacity + ")",
              height: "100%",
              position: "fixed",
              top: this.state.fixedPosition- ((this.state.windowHeight+200)/2) + "px",
              zIndex: "-1"
            }}
          > 
          <div style={{ width: "100%", backgroundColor: "rgba(0,0,0," + this.state.opacity + ")", paddingTop:"200px"}}>
            {this.props.children}
          </div>  
          </div>
          <div
            ref={element => (this.watchDiv = element)}
            style={{
              
              paddingTop: 100 / 1.77 + "%",
              zIndex: "-1"
            }}
          />
        </div>
      </Aux>
    );
  }
}

export default footerControl;
