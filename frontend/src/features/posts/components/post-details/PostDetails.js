import React, { Component } from 'react';

export default class PostDetails extends Component {

  render() {
    return (
      <div className=" border p-4 d-flex flex-column">
          <h1>{this.props.post.content}</h1>
      
      </div>
    );
  }

}

/*
<h5>{ this.props.post.title }</h5>        
<hr className="w-100" />
<span className="text-secondary">{ this.props.post.content}</span>  */