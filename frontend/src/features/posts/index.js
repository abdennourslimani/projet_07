import React from 'react';


import { PostList, PostDetails } from './components';

function Posts (props){
    return(
    <>    
    { props.loaded ? (
        <div >
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