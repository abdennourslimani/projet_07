import React from 'react';
import Styles from'./customError.module.css';

 const CustomError = (props) =>{
    console.log(props)
    return(
        <div className={Styles.container}>{props.children}</div>

    )

}
export default CustomError ; 