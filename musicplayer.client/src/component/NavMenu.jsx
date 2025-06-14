import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Player from './Player';

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  /*handleNavChange = (element) => {
      // check if html <a> has been clicked
      const tagName = element.target.tagName;
      if (tagName === 'A') {
          console.log("nav link clicked!")
          Player.pause();
      }
  }
  */

  render() {
    return (
      <header onClick={this.handleNavChange}>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand onClick={() => console.log("NavBarBrand clicked")} tag={Link} to="/">MusicPlayer</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                 <NavLink tag= {Link} className="text-dark" to="/home">Home</NavLink>
              </NavItem>  
              <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/song-view">Songs</NavLink>
              </NavItem>
              <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/player">Music Player</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default NavMenu;
