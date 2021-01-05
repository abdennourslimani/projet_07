import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.css'



export default class Header extends Component {

  render() {
    return (
      <header className={Styles.container}>
            <a className={Styles.flex_left} href="/">Groupomania</a>  
            <div className={Styles.flex_right}>     
              <NavLink to="/posts" className="nav-link active" disabled> Home</NavLink>
              <NavLink to="/signup" className="nav-link active" disabled> Sign up </NavLink>
              <NavLink to="/login" className="nav-link active" disabled> Login</NavLink>
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