import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../../assests/images/360logo.png';
import classes from './NavBar.css';

export default class navBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div >
        <Menu className={classes.shadow} inverted fixed='top'  >
          <img className={classes.Logo} src={logo} alt='360 VR'/>
          <Menu.Item href='#Home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />      
          <Menu.Item href='#References' name='references' active={activeItem === 'references'} onClick={this.handleItemClick} />
          <Menu.Item href='#Tours' name='tours' active={activeItem === 'tours'} onClick={this.handleItemClick} />
          <Menu.Item href='#Contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}
