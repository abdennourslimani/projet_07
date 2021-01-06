import React, { Component } from 'react';
import Styles from './postDetails.module.css'
export default class PostDetails extends Component {

  render() {
    return (
      <div className={Styles.container}>
        <em>Detail :</em>
        <div className={Styles.postDetail}>
            <p>{this.props.post.title}</p>
            <p>{this.props.post.content}</p>
            <span>écrit par:{this.props.post.name}</span>
          </div> 
      </div>
    );
  }

}

/*
<h5>{ this.props.post.title }</h5>        
<hr className="w-100" />
<span className="text-secondary">{ this.props.post.content}</span>  */
/*
<div className="w-25 border p-4 d-flex flex-column">
        <h5>{ this.props.movie.title }</h5>
        <hr className="w-100" />
        <div>
          <img className="d-block mx-auto w-100" src={ this.props.movie.img } />
        </div>
        <hr className="w-100" />
        <span className="text-secondary">{ this.props.movie.details }</span>
        <span>{ this.props.movie.description }</span>
      </div>*/