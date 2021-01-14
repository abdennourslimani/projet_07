import React, { Component } from 'react';
import Styles from'./removeUser.module.css';
import apiAuth from './../../../../conf/axios.auth'


  export default class RemoveUser extends Component {

      removePost = () =>{
       /* apiAuth.delete(`/${this.props.user.id}`,this.props.user)
            .then(res =>{
              console.log(res)

            })*/
           
            this.props.removeUser();

      }

  
    render() {
      return (
          <div className={Styles.container}>
                <button type ="submit" onClick={this.removePost}>RemoveAccount</button>
          </div>
      );
  
    }
  
  }