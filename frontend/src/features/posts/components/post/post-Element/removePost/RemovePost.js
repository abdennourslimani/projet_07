import React, { Component } from 'react';
import Styles from'./removePost.module.css';
import apiPost from './../../../../../../conf/axios.post'


  export default class RemovePost extends Component {

      removePost = () =>{
        apiPost.delete(`/delete/${this.props.post.id}`,this.props.post)
            .then(res =>{
              console.log(res)

            })
           
            this.props.removePost();

      }

  
    render() {
      return (
          <div className={Styles.container}>
                <button type ="submit" onClick={this.removePost}>Remove</button>
          </div>
      );
  
    }
  
  }