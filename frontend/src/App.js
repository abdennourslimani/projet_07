import React,{Component } from 'react';
import { Header, Login,Register,PostList,PostDetails} from './components'
import {BrowserRouter as Router,Route ,Redirect,Switch} from 'react-router-dom'
import apiPost  from './conf/axios.post';

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

    componentDidMount(){
                apiPost.get('/getAll')
        
                                .then(response => response.data)
                                .then(postApi=> {                                  
                                    const posts = postApi.map(post =>({
                                                    id: post.id,            
                                                    title: post.title,
                                                    content: post.content,
                                                    comments: post.comments.map((com=>{
                                                        return {
                                                                comment :com.comment  ,                   
                                                        }
                                                            
                                                        
                                                               
                                        }))
                                        
                                    }));
                                     this.updatePosts(posts)

                                        console.log(posts)

                                    //({}) dire que tu veux retourner obj
                                   
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
                        <Switch>
                            <Route path="/signup" component ={Register}></Route>
                            <Route path="/login"  component ={Login} ></Route>

                            <Redirect to="/login" />
                        </Switch>
                        <Header/>
                        { this.state.loaded ? (
                            <div >
                        <PostList posts={this.state.posts} updateSelectedPost={this.updateSelectedPost}/>
                        <PostDetails post={this.state.posts[this.state.selectedPost]} />
                          </div>
                        ):( 
                            <h1>pas de donnée</h1>
                        )}

                 </div>
      </Router>
           
    
    );
  }
}

export default App;


//<PostDetails post={this.state.posts[this.state.selectedPost]}/>
