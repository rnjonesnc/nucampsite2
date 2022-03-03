// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';


//Got this from the written instructions React - Week 2 - 7. Exercise: Inital Configuration
class App 
  extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
              <Directory />
          </div>
      );
  }
}

export default App ;


