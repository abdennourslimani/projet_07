import React from 'react';

 const CustomInput = ({field , form:{touched,errors} , ...props}) =>{
    return(
        <div className="form-group">
                <label>{field.name}</label>  
                <input type="text"  className="form-control" {...props} { ...field} />    
        </div>
)
}



export default CustomInput ; 