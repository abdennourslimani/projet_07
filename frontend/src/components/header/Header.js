import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Groupomania</a>
           
            <div >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink to="/signup" className="nav-link"> Signup </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link"> Login</NavLink>
                    </li>
                </ul>
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