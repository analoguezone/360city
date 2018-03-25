import React, { Component } from 'react';
import Layout from './components/UI/Layout/Layout';
import EmbedContent from './components/EmbedContent/EmbedContent';
import first from './assests/images/first.jpg';
import './App.css';
//import classes from './Custom.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import CardBlock from './components/CardBlock/CardBlock'

class App extends Component {
  

  render() {
    configureAnchors({offset: -60, scrollDuration: 1000})

    return (
      <div>
        <Layout>
          <ScrollableAnchor id='Home'><div></div></ScrollableAnchor>
            <EmbedContent backGround='bigWhite'>
              <img src={first} alt='Benefi your bussines'/>
            </EmbedContent>
          <EmbedContent backGround='bigWhite'>
            <img src={first} alt='Benefi your bussines'/>
          </EmbedContent>

          <CardBlock header='References'/>
          <CardBlock header='Tours'/>
          
        </Layout>
      </div>
    );
  }
}

export default App;
