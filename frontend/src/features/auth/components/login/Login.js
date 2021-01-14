import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import Styles from './login.module.css';

import CustomInput from '../../../../components/utils/customInupt/CustomInupt'
import CustomError from '../../../../components/utils/customError/CustomError'

import * as axios from 'axios';
import * as Yup from 'yup';



export default class Login extends Component {
    submit =(values,actions) =>{
        //console.log({values ,actions})
        actions.setSubmitting(false)
        actions.resetForm();
        axios.post('http://localhost:3000/api/auth/login',values)
                        .then(response =>{
                            console.log(response)
                        

                                   const token =response.data.token ;
                                   const userId =response.data.userId ;
                                   localStorage.setItem('Token',token);
                                   localStorage.setItem('userId',userId);                           
                            
                           
                           
                            window.location='/posts'
                       
      })

    }
    userSchema = Yup.object().shape({
                    email: Yup.string().email("L'email doit être valide").required('Required'),
                    password: Yup.string().min(5, 'Trop court').required('required')
      });

      login=()=>{
        if(localStorage.getItem('Token') != null && localStorage.getItem('userId') != null){
               this.props.login()
      }
    }


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
              
                <button onClick={this.login}type="submit" className="btn btn-dark" disabled={isSubmitting}>
                        connexion
                </button>
          </form>
            )}
            </Formik>
        </div>



    )
  }

}