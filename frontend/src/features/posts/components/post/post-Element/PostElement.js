import React, { Component } from 'react';




const style = {
    width: '50%',
    height: '50%',
    overflow: 'hidden',
    padding: '10px',
    'margin-left':'10px',
    cursor: 'pointer',
    border : '1px solid black',
  }
  const style1= {
    width: '70%',
    height: '50%',
    'text-align':'center',

  
  }

  const style2= {
    width: '50%',
    height: '80%',
    'text-align':'center'
   
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
        <div   style={style}>
          <div style={style2}>
            <h5>{this.props.post.title}</h5>
             <p>{this.props.post.content}</p>
            <hr className="w-100" />
            <div style={style1}>   {comment}  </div>
           

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
