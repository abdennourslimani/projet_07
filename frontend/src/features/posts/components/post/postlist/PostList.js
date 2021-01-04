import React, { Component } from 'react';
import PostElement from '../post-Element/PostElement';

export default class PostList extends Component {

  render() {

    const style = {
      'display':'flex',
      'justify-content':'space-around',
      'margin':'20px 15px 0px 0px',
      'height':'100vh',
       'width':'65%',
     }
     
   

    return (
      <div style={style}>
        {this.props.posts.map((p, index) => (
          <PostElement 
          key={p.id} 
          comment={p.comments}
          post={p}
          updateSelectedPost={() => { this.props.updateSelectedPost(index) }} />
        ))}
      </div>
    );
  }

}


/*
*/

/*
author_id: 1
comments: [{…}]
content: "content of my sixthcontent"
id: 8
name: "slimani"
publish_date: "2020-11-26T15:35:06.000Z"
surname: "abdnenour"
title: "7"
*/