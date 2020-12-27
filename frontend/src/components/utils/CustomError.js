import React from 'react';

 const CustomError = (props) =>{
    console.log(props)
    return(
        <div className="text-danger ">{props.children}</div>

    )

}




export default CustomError ; 