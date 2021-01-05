import React, { Component } from 'react';
import PostElement from '../post-Element/PostElement';
import Styles from'./postlist.module.css';

export default class PostList extends Component {

  render() {

    

    return (
      <div className={Styles.container} >
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