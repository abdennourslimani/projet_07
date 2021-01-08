import React from 'react';
import Styles from'./index.module.css';

import { PostList, PostDetails ,AddPost} from './components';
import Loading from './../../components/utils/Loading'

  



function Posts (props){
    return(
    <>    
    { props.loaded ? (
        <div  className={Styles.container}>
            <div>
                <AddPost updatePosts={props.updatePosts}/>
                <PostList posts={props.posts} updateSelectedPost={props.updateSelectedPost}/>
            </div>
            <div>
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