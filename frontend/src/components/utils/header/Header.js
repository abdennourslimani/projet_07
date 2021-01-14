import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.css'


function Header (props){
    return(
    <>    
    { props.isLoggedIn ? (
       <header className={Styles.containerLogout}>
         <a className={Styles.logo} href="/">Groupomania</a> 
          <div className={Styles.logout}>
            <NavLink to="/login" onClick={props.logOut}>logout</NavLink>
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
//<NavLink to="/login" >RemoveAccount</NavLink>



export default Header

//<NavLink onClick={props.logOut()} to="/login" className="nav-link active" disabled> logout</NavLink>



