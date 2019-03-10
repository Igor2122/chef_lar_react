// eslint-disable-next-line
import React, { Component } from 'react';
import classes from './Navigation.css';
import './Navigation.css';
// import './Navigation.css';
import { NavLink as CstmNavLink  } from 'react-router-dom';
// eslint-disable-next-line
import {  NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

// NavbarBrand,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem

class Navigation extends Component {
   
   state = {
      isOpen: false
   }
   
   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   
   render() {
      return (
         <div>
           <Navbar fixed={this.props.fixed} className={classes.Navbar} expand="sm" >
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="mx-auto" navbar>
                <NavItem>  
                   <NavLink className="px-5" tag={CstmNavLink} to="/"  exact>Home</NavLink> 
                 </NavItem> 
                 <NavItem>
                   <NavLink className="px-5" tag={CstmNavLink} to="/about"  exact>About</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink className="px-5" tag={CstmNavLink} to="/recepies" exact>Recepies</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink className="px-5" tag={CstmNavLink} to="/admin" exact>Admin</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;