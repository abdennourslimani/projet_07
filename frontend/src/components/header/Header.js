import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.scss'



export default class Header extends Component {

  render() {
    return (
      <header className={Styles.container}>
            <a className="left" href="/">Groupomania</a>  
            <div className="flex_right">     
              <NavLink to="/posts" className="nav-link"> Home</NavLink>
              <NavLink to="/signup" className="nav-link"> Signup </NavLink>
              <NavLink to="/login" className="nav-link"> Login</NavLink>
            </div>   
    </header>
    );
  }

}
/*
navbar-expand-lg 
className="collapse navbar-collapse"
<button className="navbar-toggler">
<span className="navbar-toggler-icon"></span>
</button>*/