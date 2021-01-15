import React from 'react';
import Styles from './customInputWithoutLabel.module.css';

 const CustomInputWithoutLabel = ({field , form:{touched,errors} , ...props}) =>{
    return(
        <div className={Styles.container}>
                <label className={Styles.labelComment} htmlFor={props.id}>{props.id}</label>  
                <input type="text"  {...props} { ...field} />    
        </div>
)
}



export default CustomInputWithoutLabel ; 



