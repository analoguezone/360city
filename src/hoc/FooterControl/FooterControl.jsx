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
  };

  onScroll = () => {
    const rect = this.watchDiv.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    let offsetZero = windowHeight - rect.height;
    let pixelShow = offsetZero + rect.height - rect.y;
    const percentageTo = pixelShow / rect.height;

    if (percentageTo >= 0 && percentageTo <= 1) {
      this.setState(prevState => {
        return {
          opacity: percentageTo.toFixed(2),

          windowHeight: rect.height,
          fixedPosition: windowHeight
        };
      });
    } else {
      // egeszre kerekit, hogy nem maradjon szellemkep gyors scroll eseten
      this.setState(prevState => {
        return {
          opacity: percentageTo.toFixed(),
          windowHeight: rect.height,
          fixedPosition: windowHeight
        };
      });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };

  render() {
    return (
      <Aux>
        <div
          style={{
            transform:
              "translate(0, " +
              -(this.state.opacity * (this.state.windowHeight / 1.88)) +
              "px)",
            opacity: this.state.opacity,
            backgroundColor: "rgba(0,0,0," + this.state.opacity + ")",
            height: "100%",
            position: "fixed",
            top: this.state.fixedPosition - this.state.windowHeight / 2 + "px",
            zIndex: "-1"
          }}
        >
          <div
            style={{
              
              backgroundColor: "rgba(0,0,0," + this.state.opacity + ")",
              padding: "0px, 0"
            }}
          >
       {this.props.children}     
          </div>
        </div>
        {/* placeholder element a footer meretaranyahoz kepest kell beallitani */}
        <div
          ref={element => (this.watchDiv = element)}
          style={{
            paddingTop: window.innerHeight*0.9 + "px",
            zIndex: "-1"
          }}
        />
      </Aux>
    );
  }
}

export default footerControl;
