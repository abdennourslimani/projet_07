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
            user:[] , 
            isLoggedIn:false,
            selectedPost:0,
            loaded:false,
            isAdmin : false , 
        }
    }




componentDidMount(){
    apiPost.get('/getAll')

            .then(response => response.data)
            .then(postApi=> {   
                const posts=postApi.map(post=>{
                        return{
                            author_id:post.author_id,
                            id: post.id,            
                            title: post.title,
                            content: post.content,
                            name:`${post.name} ${post.surname}`,
                            publish_date:post.publish_date,
                            image_url:post.image_url,
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

    if(localStorage.getItem('Token') != null && localStorage.getItem('userId') != null){
        this.setState({
            isLoggedIn: true
            
        }); 
    }else if (localStorage.getItem('Token') == null && localStorage.getItem('userId') ==null){
        this.setState({isLoggedIn: false}); 
    }
}

logOut = () =>{
    localStorage.clear()
    this.setState({
        isLoggedIn:false,
        user :[],
    })

//window.location ="/login"  
}




login=(user) =>{
    this.setState({ 
        isLoggedIn:true,
        user,
       
    })
}


addPost = post => {
    const posts = this.state.posts.slice();
    posts.push(post);
    this.setState({
    posts
});
}

removePost = index => {
    const posts = [...this.state.posts];    //this.state.posts.slice();
    posts.splice(index, 1);
    this.setState({
        posts,
});

}

removeUser=index=>{
    const user = [...this.state.user];
    index = this.state.user[0];  
    user.splice(index, 1);
    this.setState({
        user,
});

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
                         <Header  user={this.state.user} removeUser={this.removeUser}      logOut={this.logOut} isLoggedIn={this.state.isLoggedIn}/>
                        <Switch>
                            <Route path="/signup" component ={Register}></Route>
                            <Route path="/login"  render={ (props) => {
                            return (
                                    <Login
                                    { ...props } 
                                    loaded={this.state.loaded}
                                    posts={this.state.posts}
                                    isLoggedIn={this.state.isLoggedIn}
                                    updateIsloggedIn={this.updateIsloggedIn}
                                    />
                                )
                            }} />
                            <Route path="/posts" render={ (props) => {
                            return (
                                    <Posts
                                    { ...props } 
                                    loaded={this.state.loaded}
                                    posts={this.state.posts}
                                    updateSelectedPost={this.updateSelectedPost}
                                    selectedPost={this.state.selectedPost} 
                                    updatePosts={this.updatePosts}   
                                    addPost={this.addPost} 
                                    removePost={this.removePost}           
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


