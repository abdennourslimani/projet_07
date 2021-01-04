import React from 'react';


import { PostList, PostDetails } from './components';

const style = {
   'display':'flex',
   'justify-content':'space-between',
   'margin':'20px 20px 0px 0px',
   'height':'100vh',

  }
  



function Posts (props){
    return(
    <>    
    { props.loaded ? (
        <div  style={style}>
            <PostList posts={props.posts} updateSelectedPost={props.updateSelectedPost}/>
            <PostDetails post={props.posts[props.selectedPost]} />
      </div>
    ):( 
        <h1>pas de donnée</h1>
    )}
    </>

    )
    
}



export default Posts 