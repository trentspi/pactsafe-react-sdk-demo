import React, { Component } from 'react';
import logo from './logo.svg';
import { PSClickWrap, PSBrowseWrap } from '@pactsafe/pactsafe-react-sdk'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="email" id="userEmail" placeholder="Your Email"/>

        <PSClickWrap 
          accessId={process.env.REACT_APP_PACTSAFE_ACCESS_ID} 
          groupKey={process.env.REACT_APP_PACTSAFE_GROUP_KEY_CW}
          signerIdSelector={"userEmail"}
          clickWrapStyle={'scroll'}
          forceScroll={true}
          
        />
        <PSBrowseWrap 
          accessId={process.env.REACT_APP_PACTSAFE_ACCESS_ID} 
          groupKey={process.env.REACT_APP_PACTSAFE_GROUP_KEY_BW} 
          linkText={'Privacy Policy Test'} 
          alwaysVisible={true}
        />
      </div>
    );
  }
}

export default App;
