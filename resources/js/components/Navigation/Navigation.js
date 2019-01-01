// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
// import classes from './Navigation.css';
// eslint-disable-next-line
import { NavLink as CstmNavLink  } from 'react-router-dom';
// eslint-disable-next-line
import {  NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // eslint-disable-next-line
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';
   
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem




class Navigation extends Component {
    
  constructor (){
    super();
    this.state = {
      isOpen: false
    }
    
} 

  //  toggle = () => {
  //     this.setState({
  //        isOpen: !this.state.isOpen
  //     });
  //  }
   
   
            //  <NavbarBrand href="/">reactstrap</NavbarBrand>
            // color="primary"
   render() {
      return (
         <div >
           <Navbar color="primary" expand="sm" >
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="mr-auto"  navbar>
                 <NavItem>
                   <NavLink tag={CstmNavLink} to="/">Home</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink tag={CstmNavLink} to="/about">About</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;