import React from 'react';
import Styles from'./index.module.css';

import { PostList, PostDetails ,AddPost} from './components';
import Loading from './../../components/utils/Loading'

  



function Posts (props){
    return(
    <>    
    { props.loaded ? (
        <div  className={Styles.container}>
            <div className={Styles.flex_left}>
                <AddPost addPost={props.addPost}/>
                <PostList addPost={props.addPost} posts={props.posts} removePost={props.removePost} updateSelectedPost={props.updateSelectedPost}/>
            </div>
            <div className={Styles.flex_right}>
                <PostDetails post={props.posts[props.selectedPost]} />
            </div>
      </div>
    ):( 
        <Loading/>
    )}
    </>

    )
    
}



export default Posts 