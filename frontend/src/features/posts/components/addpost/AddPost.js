import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import Styles from './addpost.module.css'

import CustomInput from '../../../../components/utils/customInupt/CustomInupt'
import CustomError from '../../../../components/utils/customError/CustomError'

import apiPost  from './../../../../conf/axios.post';
import * as Yup from 'yup';

export default class AddPost extends Component {


    submit =(values,actions) =>{
        apiPost.post('/add',values)
        .then(Response=>{
            console.log(Response)
        })
    

    }
    userSchema = Yup.object().shape({
                    title: Yup.string().min(2,'trop court comme titre').required('Required'),
                    content: Yup.string().min(5, 'Trop court').required('required'),
      });

  

  render() {
    return (
        <div className="container-fluid p-5  d-flex flex-column justify-content-center align-items-center" >
            <Formik 
            onSubmit={this.submit}
            initialValues={{ title: '', content: ''}}
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
            <form onSubmit={ handleSubmit } className={Styles.container}> 
                <span>Add your article</span>                                     
                <Field  name ="Title" type="text" label ="Title" placeholder='title' component ={CustomInput}/>
                <ErrorMessage name="title" component = {CustomError}/>   
                <div className={Styles.uploadImage}>
                    <Field  name ="Image" type="file" label ="Image" placeholder="content" component ={CustomInput}/>
                    <button className="btn " type="submit">Upload</button>
                </div>                     
               
                <Field  name ="Content"  type ="text" label ="Content" placeholder="content" component ={CustomInput}/>
                <ErrorMessage name="password" component = {CustomError}/>
                
              
                <button type="submit" className="btn btn-dark"  disabled={isSubmitting}>
                        Envoyer
                </button>
          </form>
            )}
            </Formik>
        </div>



    )
  }

}