import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import Styles from './login.module.css';

import CustomInput from '../../../../components/utils/customInupt/CustomInupt'
import CustomError from '../../../../components/utils/customError/CustomError'

import * as axios from 'axios';
import * as Yup from 'yup';
/*
const CustomInput =({field , form:{touched,errors} , ...props}) =>{
        return(
            <div className="form-group">
                    <label>{field.name}</label>  
                    <input type="text"  className="form-control" {...props} { ...field} />    
            </div>
  )
}
*/
/*const CustomError = (props) =>{
    console.log(props)
    return(
        <div className="text-danger ">{props.children}</div>

    )

}
*/



export default class Login extends Component {
    submit =(values,actions) =>{
        //console.log({values ,actions})
        actions.setSubmitting(false)
        actions.resetForm();
        axios.post('http://localhost:3000/api/auth/login',values)
                        .then(Response =>{
                          const token =Response.data.token ;
                          localStorage.setItem('Token',token);
                          window.location='/posts'
                       
      })

    }
    userSchema = Yup.object().shape({
                    email: Yup.string().email("L'email doit être valide").required('Required'),
                    password: Yup.string().min(5, 'Trop court').required('required')
      });

   /* validate(values) {
        let errors = {};
        if(!values.name){
            errors.name='required'
        }
       else if(values.name && values.name.length < 5 ){
            errors.name = 'trop court' ; 
        }
        return errors ; 
    }*/

  render() {
    return (
        <div className={Styles.container} >
            <Formik 
            onSubmit={this.submit}
            initialValues={{ email: '', password: ''}}
            validationSchema={this.userSchema}
            validateOnChange ={false} 
            //validate={this.validate}
            >
            { ({values,
                 handleBlur,
                 handleChange,
                 handleSubmit,
                 isSubmitting,
                 errors,
                 touched
        }) => ( 
            <form onSubmit={ handleSubmit } className={Styles.form}> 
            <span>Login</span>                                     
                <Field  name ="email" type="email" label ="email" placeholder="Ex : abc@msn.fr" component ={CustomInput}/>
                <ErrorMessage name="email"  component = {CustomError}/>                        
               
                <Field  name ="password"  type ="password" label ="password" placeholder="your password" component ={CustomInput}/>
                <ErrorMessage name="password"  component = {CustomError}/>
              
                <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
                        Envoyer
                </button>
          </form>
            )}
            </Formik>
        </div>



    )
  }

}