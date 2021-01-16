import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.css'
//import RemoveUser from'./removeUser/RemoveUser'
import Logo from'./Logo'

function Header (props){
  return(
  <>    
  { props.isLoggedIn ? (
     <header className={Styles.container}>
       <Logo/>
        <div className={Styles.flex_right}>
          <NavLink to="/login" onClick={props.logOut}>logout</NavLink>
          <NavLink to="/login" className="btn btn-danger" onClick={props.removeUser}>RemoveAccount</NavLink>


        </div>
     </header>
      ):( 
        <header className={Styles.container}>
          <Logo/>
          <div className={Styles.flex_right}>
               <NavLink to="/signup" activeClassName="active" disabled> Sign up </NavLink>
               <NavLink to="/login" activeClassName="active"> Login</NavLink>
          </div>
             
        </header>
      )
  
  }
  </>

  )
  
}
//<NavLink to="/login" >RemoveAccount</NavLink>



export default Header
//          <RemoveUser  user={props.user} removeUser={props.removeUser}/>

//<NavLink onClick={props.logOut()} to="/login" className="nav-link active" disabled> logout</NavLink>



