import React, { Component } from 'react';
import '../App.css';

class Logo extends Component{
  render() {
    return(
      <div className='logo'>
        <img src={require('../images/ipc2.png')} alt="logo img" />
      </div>
    );
  }
}
export default Logo;
