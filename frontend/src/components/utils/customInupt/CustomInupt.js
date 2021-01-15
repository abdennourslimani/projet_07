import React from 'react';
import Styles from './customInput.module.css';

 const CustomInput = ({field , form:{touched,errors} , ...props}) =>{
    return(
        <div className={Styles.container}>
                <label htmlFor={props.id}>{field.name}</label>  
                <input type="text"  {...props} { ...field} />    
        </div>
)
}



export default CustomInput ; 