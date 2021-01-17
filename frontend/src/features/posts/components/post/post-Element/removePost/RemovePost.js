import React, { Component } from 'react';
import Styles from'./removePost.module.css';
import apiAxios from '../../../../../../conf/axios.conf'


  export default class RemovePost extends Component {

      removePost = () =>{
        apiAxios.delete(`post/delete/${this.props.post.id}`,this.props.post)
            .then(res =>{
              console.log(res)

            })
           
            this.props.removePost();

      }

  
    render() {
      return (
          <div className={Styles.container}>
                <button type ="submit" className="btn btn-danger" onClick={this.removePost}>Remove</button>
          </div>
      );
  
    }
  
  }