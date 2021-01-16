import React, { Component } from 'react';
import Styles from'./removeUser.module.css';
import apiAuth from './../../../../conf/axios.auth'
import {BrowserRouter as Router,Route ,Redirect,Switch} from 'react-router-dom'



  export default class RemoveUser extends Component {

    removeUser = () =>{
    apiAuth.delete(`/delete/${this.props.user.id}`,this.props.user)
          .then(res =>{
              alert(res.data.message)
              return <Redirect to="/login" />
          })

         localStorage.clear();
       
         
    

    }


  
    render() {
      
      return (
      
          <div className={Styles.container}>
                <button type ="submit" className='btn btn-danger' onClick={this.removeUser}>RemoveAccount</button>
          </div>
      );
  
    }
  
  }