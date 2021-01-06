import React,{Component } from 'react';
import { Header} from './components'
import {BrowserRouter as Router,Route ,Redirect,Switch} from 'react-router-dom'
import apiPost  from './conf/axios.post';
import Posts from'./features/posts'
import {  Login,Register} from './features/auth/components'


import './index.css'




class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts : [],
            isloggedIn:false,
            selectedPost:0,
            loaded:false
        }
    }


/*  /*  
comments: 
1: {id: 15, publish_date: "2021-01-02T16:31:25.000Z", comment: "je suis le 2 comment du 1 post", author_id: 1, post_id: 9}
2: {id: 11, publish_date: "2021-01-02T16:28:05.000Z", comment: "comment du 1 post", author_id: 1, post_id: 9}
post:
__proto__: Array(0)
content: "je suis le contenu du 1 post"
id: 9
name: "slimani"
publish_date: "2021-01-02T16:26:03.000Z"
surname: "abdnenour"
title: "titre 1 post"
*/

componentDidMount(){
    apiPost.get('/getAll')

            .then(response => response.data)
            .then(postApi=> {   
                const posts=postApi.map(post=>{
                        return{
                            id: post.id,            
                            title: post.title,
                            content: post.content,
                            name:`${post.name} ${post.surname}`,
                            publish_date:post.publish_date,
                            comments:post.comments.map(comment=>{
                                return {
                                    comment : comment.comment,
                                    publish_date:comment.publish_date,
                                }
        
        
                            }),   
                                        
                        }
                })
                this.updatePosts(posts)
                //({}) dire que tu veux retourner obj  
                console.log(posts) 
                      
            })

            .catch(err => console.log(err))
}









    updatePosts = posts =>{
        this.setState({
            posts,
            loaded:true

        })
    }
    updateSelectedPost =(index)=>{
        this.setState({
            selectedPost:index

        })

    }


  render() {
    return (
    <Router>
                <div className="App">
                         <Header/>
                        <Switch>
                            <Route path="/signup" component ={Register}></Route>
                            <Route path="/login"  component ={Login} ></Route>
                            <Route path="/posts" render={ (props) => {
                            return (
                                    <Posts
                                    { ...props } 
                                    loaded={this.state.loaded}
                                    posts={this.state.posts}
                                    updateSelectedPost={this.updateSelectedPost}
                                    selectedPost={this.state.selectedPost}               
                                    />
                                )
                            }} />
                            <Redirect to="/login" />
                      </Switch>
                      
                 </div>
      </Router>
           
    
    );
  }
}

export default App;


//<PostDetails post={this.state.posts[this.state.selectedPost]}/>
