import React, { Component } from 'react';
import Styles from'./postElement.module.css';


  export default class PostElement extends Component {
  
    onClickPost = (index) => {
        this.props.updateSelectedPost(index);
      }
    
  
    render() {
      
        const comment = this.props.comment.map(function(com, idx) {
            return ([
              <div className={Styles.comments}>
                 <p key={com.id} >{com.comment}</p>
                <span key={com.id} >published:{com.publish_date}</span>
            </div>
            ]);
        });

      return (
          <div className={Styles.container}>
              <div className={Styles.posts}>
                  <h5>{this.props.post.title}</h5>
                  <img src={this.props.post.image_url} alt="name"/>
                  <p>{this.props.post.content}</p>
                  <button type="button" className="btn btn-dark" onClick={this.onClickPost} > En savoir plus</button>
              </div>
              <span className={Styles.titlecomment}>Comments : </span> 
                {comment}

          </div>
      );
  
    }
  
  }
/*
  const renObjData = this.props.data.map(function(data, idx) {
    return <p key={idx}>{data.name}</p>;
});
*/
/*
  this.id = post.id ? post.id : null;
  this.title = post.title ? post.title : null;
  this.content = post.content ? post.content : null;
  this.publish_date = post.publish_date ? post.publish_date : null;
  this.author_id = post.author_id ? post.author_id : false;
  this.comments = post.comments ? post.comments : []
  */
