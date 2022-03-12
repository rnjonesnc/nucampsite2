// import logo from './logo.svg';
import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
//import { CAMPSITES } from './shared/campsites';



//Got this from the written instructions React - Week 2 - 7. Exercise: Inital Configuration
class App extends Component {
  render() {
      return (
          <div className="App">
              <Main/>
          </div>
      );
  };
}

export default App ;


