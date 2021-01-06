import React from 'react';
import Styles from'./index.module.css';

import { PostList, PostDetails } from './components';
import Loading from './../../components/utils/Loading'

  



function Posts (props){
    return(
    <>    
    { props.loaded ? (
        <div  className={Styles.container}>
            <PostList posts={props.posts} updateSelectedPost={props.updateSelectedPost}/>
            <PostDetails post={props.posts[props.selectedPost]} />
      </div>
    ):( 
        <Loading/>
    )}
    </>

    )
    
}



export default Posts 