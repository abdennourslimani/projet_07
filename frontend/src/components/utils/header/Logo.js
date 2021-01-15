import React from 'react';
import logo from'./logo.png'
import Styles from './logo.module.css'






function Logo (props){
    return(
    <>    
    { 
    
        <img className={Styles.container} src={logo}/>

    }
    </>
    )
}



export default Logo ;
