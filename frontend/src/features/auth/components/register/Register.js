import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import * as axios from 'axios';
import Styles from './register.module.css'


import CustomInput from '../../../../components/utils/customInupt/CustomInupt'
import CustomError from '../../../../components/utils/customError/CustomError'




/*
const CustomInput =({field , form:{touched,errors} , ...props}) =>{
        return(
            <div className="form-group">
                    <label>{field.name}</label>  
                    <input type="text"  className="form-control" {...props} { ...field} />    
            </div>
  )
}

const CustomError = (props) =>{
    console.log(props)
    return(
        <div className="text-danger">{props.children}</div>

    )

}
*/


export default class Register extends Component {
    submit =(values,actions) =>{
        console.log({values,actions})
        actions.setSubmitting(false)
        actions.resetForm();
        axios.post('http://localhost:3000/api/auth/signup',values).then(Response =>{
            console.log(Response)
        })


    }
         userSchema = Yup.object().shape({
                    name: Yup.string('String').min(3, 'your name is short').max(20, 'Trop long').required('Required'),
                    surname : Yup.string('String').min(3, 'your surname is short').max(20, 'Trop long').required('Required'),
                    email: Yup.string().email("please enter a valid email").required('Required'),
                    password: Yup.string().min(5, 'a short password').required('required')
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
        <div className={Styles.container}>
            <Formik 
            onSubmit={this.submit}
            initialValues={{ name :'',surname:'',email: '', password: ''}}
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
                <span>Register</span>
                <Field  name ="name" label ="name" placeholder="Ex : zizou" component ={CustomInput}/>
                <ErrorMessage name="name" component = {CustomError}/>                  
                
                 <Field  name ="surname" label ="surname" placeholder="Ex :salomon" component ={CustomInput}/>
                 <ErrorMessage name="surname" component = {CustomError}/>                  
               
                <Field  name ="email" type="email" placeholder="Ex : abc@msn.fr" label ="email" component ={CustomInput}/>
                <ErrorMessage name="email" component = {CustomError}/>                        
               
                <Field  name ="password"  type ="password" label ="password" placeholder="choose a password" component ={CustomInput}/>
                <ErrorMessage name="password" component = {CustomError}/>
              
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