import React, { Component } from "react";
import { Responsive, Menu, Transition } from "semantic-ui-react";
import logo from "../../../assests/images/360logo.png";
import classes from "./NavBar.css";
import Aux from "../../../hoc/Aux/Aux";
import MenuButton from "../NavBar/MenuButton";

export default class navBar extends Component {
  state = {
    activeItem: "",
    visible: false
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  toggleVisibility = () => {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  render() {
    const { activeItem } = this.state;
    const { visible } = this.state;

    return (
      <Aux>
        <Responsive minWidth={768}>
          <Menu size="huge" className={classes.shadow} inverted fixed="top">
            <a href="#Home">
              <img className={classes.Logo} src={logo} alt="360 VR" />
            </a>
            <Menu.Item
              href="#Home"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href="#References"
              name="references"
              active={activeItem === "references"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href="#Tours"
              name="tours"
              active={activeItem === "tours"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href="#Contact"
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Responsive>

        <Responsive maxWidth={767}>
          <Menu
            size="huge"
            className={classes.shadow}
            fixed="top"
            inverted
            vertical
            fluid
          >
            <a href="#Home">
              <img className={classes.Logo} src={logo} alt="360 VR" />
            </a>
            <MenuButton clicked={this.toggleVisibility} />
            <div
              style={{ maxHeight: this.state.visible ? "800px" : "0" }}
              className={classes.menuAnimation}
            >
              <Transition
                visible={visible}
                unmountOnHide={true}
                animation="fade right"
              >
                <div>
                  <Menu.Item
                    href="#Home"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    href="#References"
                    name="references"
                    active={activeItem === "references"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    href="#Tours"
                    name="tours"
                    active={activeItem === "tours"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    href="#Contact"
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                  />
                </div>
              </Transition>
            </div>
          </Menu>
        </Responsive>
      </Aux>
    );
  }
}
