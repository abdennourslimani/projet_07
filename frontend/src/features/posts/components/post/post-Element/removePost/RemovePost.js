import React, { Component } from 'react';
import Styles from'./removePost.module.css';



  export default class RemovePost extends Component {
      /*removePost = () =>{
        this.props.removePost();

      }*/
  
    render() {
      return (
          <div className={Styles.container}>
                <button onClick={this.removePost}>Remove</button>
          </div>
      );
  
    }
  
  }