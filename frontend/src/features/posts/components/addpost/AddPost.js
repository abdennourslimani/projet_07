import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import Styles from './addpost.module.css'

import CustomInput from '../../../../components/utils/customInupt/CustomInupt'
import CustomError from '../../../../components/utils/customError/CustomError'


import apiPost  from './../../../../conf/axios.post';
import * as Yup from 'yup';

export default class AddPost extends Component {

   submit = (values,actions) => {
        console.log(values)
        actions.setSubmitting(false);
        actions.resetForm();
        const data = new FormData()
        data.append('title', values.title)
        data.append('image', values.image)
        data.append('content', values.content)


       apiPost.post("/add", data, {
        })
        .then(res => {
            console.log(res)
        }) 
           
        };

   

    userSchema = Yup.object().shape({
                    title: Yup.string().required('required'),
                    content: Yup.string().min(5, 'Trop court').required('required'),
      });

  

  render() {
    return (
        <div className="container-fluid p-5  d-flex flex-column justify-content-center align-items-center" >
           <Formik 
            onSubmit={this.submit}
            initialValues={{ title: '', content: '',image:''}}
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
                 touched,
                 setFieldValue
        }) => ( 
            <form onSubmit={ handleSubmit } className={Styles.container}> 
                <span>Add your article</span>                                     
                <Field  name ="title" type="text"  placeholder='title' component ={CustomInput}/>
                <ErrorMessage name="title" component = {CustomError}/>    


                <div className={Styles.uploadImage}>
                    <input  id="image" name ="image" type="file"  placeholder="content" onChange={(event) => {setFieldValue("image", event.currentTarget.files[0] ) }}/>
                </div>                    
               

               
                <Field  name ="content"  type ="text"  placeholder="content" component ={CustomInput}/>
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


