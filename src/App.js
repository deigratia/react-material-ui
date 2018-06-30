import React, { Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Login from './page/login'
import Footer from './page/footer'
import Data from './page/data'
import Registrasi from './page/registrasi'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <Router>
      <div className= "navbar" className="App">
      <Navbar light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{color:'white'}} href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'white'}} href="/registrasi">Registrasi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'white'}} href="/data">Data</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/data" exact component={Data} />
          <Route path="/registrasi"  component={Registrasi} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
