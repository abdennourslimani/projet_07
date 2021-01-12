import React from 'react';
import Styles from './customInputWithoutLabel.module.css';

 const CustomInputWithoutLabel = ({field , form:{touched,errors} , ...props}) =>{
    return(
        <div className={Styles.container}>
                <input type="text"  {...props} { ...field} />    
        </div>
)
}



export default CustomInputWithoutLabel ; 