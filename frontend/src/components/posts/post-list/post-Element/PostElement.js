import React, { Component } from 'react';




const style = {
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    margin: '0px 5px 10px 5px',
    cursor: 'pointer',
    border : '1px solid black',
  }
  
  export default class PostElement extends Component {
  
    onClickPost = (index) => {
        this.props.updateSelectedPost(index);
      }
    
  
    render() {
      
        const comment = this.props.comment.map(function(comment, idx) {
            return <p key={idx} className="w-100">{comment.comment}</p>;
        });

      return (
        <div  className={" d-flex flex-column bg-light"} style={style}>
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{this.props.post.title}</h5>
             <p>{this.props.post.content}</p>
            <hr className="w-100" />
            <div className="w-100">   {comment}  </div>
           

          </div>
          <button onClick={this.onClickPost} className="btn btn-primary m-3"> en savoir plus</button>
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
