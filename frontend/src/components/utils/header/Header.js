import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.css'


function Header (props){
    return(
    <>    
    { props.isLoggedIn ? (
       <header className={Styles.container}>
          <a className={Styles.flex_left} href="/">Groupomania</a> 
          <div>
            <NavLink to="/login"className={Styles.logout} onClick={props.logOut}>logout</NavLink>
          </div>
       </header>
        ):( 
          <header className={Styles.container}>
            <a className={Styles.flex_left} href="/">Groupomania</a>  
            <div className={Styles.flex_right}>
                 <NavLink to="/signup" className="nav-link active" disabled> Sign up </NavLink>
                 <NavLink to="/login" className="nav-link active" > Login</NavLink>
            </div>
               
          </header>
        )
    
    }
    </>

    )
    
}



export default Header

//<NavLink onClick={props.logOut()} to="/login" className="nav-link active" disabled> logout</NavLink>



