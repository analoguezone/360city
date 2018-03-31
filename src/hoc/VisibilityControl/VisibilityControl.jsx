import React, { Component } from "react";
import { Transition, Visibility } from "semantic-ui-react";

export class visibilityControl extends Component {
  state = {
    visible: false
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  visibilityOn = () => {
    this.setState({ visible: true });
  };
  visibilityOff = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;

    return (
      <Visibility
        onTopVisible={this.visibilityOn}
        mountOnShow={false}
        fireOnMount={true}
      >
        <Transition
          visible={visible}
          animation={
            this.props.animationType ? this.props.animationType : "fade"
          }
          duration={
            this.props.animationDuration ? this.props.animationDuration : "1500"
          }
        >
          {this.props.children}
        </Transition>
      </Visibility>
    );
  }
}

export default visibilityControl;
