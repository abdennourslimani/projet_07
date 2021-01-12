import React,{Component} from 'react';
import { Formik , Field,ErrorMessage} from 'formik';
import Styles from './addComment.module.css';

import CustomInput from '../../../../../../components/utils/customInupt/CustomInputWithoutLabel'
import CustomError from '../../../../../../components/utils/customError/CustomError'

import apiComment from './../../../../../../conf/axios.comment';
import * as Yup from 'yup';



export default class AddComment extends Component {
    submit =(values,actions) =>{
        console.log({values ,actions})
         actions.setSubmitting(false)
        actions.resetForm();
       apiComment.post('/add',values)
                        .then(response =>{console.log(response)
                            
                                        
      })

    }
    userSchema = Yup.object().shape({
                    comment: Yup.string().required('required')
      });


  render() {
    return (
        <div className={Styles.container} >
            <Formik 
            onSubmit={this.submit}
            initialValues={{ comment: '',post_id:this.props.post.id  }}
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
                <Field  name ="comment" type="text" placeholder=" Add your comment" component ={CustomInput}/>
                <ErrorMessage name="comment"  component = {CustomError}/> 
                <input name="post_id" type="text" disabled ></input>                          
                <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
                      Add
                </button>

          </form>
            )}
            </Formik>
        </div>



    )
  }

}





