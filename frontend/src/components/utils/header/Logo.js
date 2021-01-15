import React from 'react';
import logo from'./logo.png'
import Styles from './logo.module.css'






function Logo (props){
    return(
    <>    
    { 
    
        <img className={Styles.container} alt="logo_gropomania" src={logo}/>

    }
    </>
    )
}



export default Logo ;
