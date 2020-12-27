import React from 'react';
import {Header, Login,Register} from './components'
import {BrowserRouter as Router,Link ,Route } from 'react-router-dom'
import './index.css'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

   /* componentDidMount(){
                faire mon get apres mon premier render
                axios.get('url').then(response => response.data)
                                .then(users=>)
    }*/




  render() {
    return (
    <Router>
                <div className="App p-3 w-100 d-flex border     flex-row  ">
                        <Link to="/2">signup</Link>
                        <Link to="/1">login</Link>
                </div>
                <div>
                      <Route path="/2" component ={Register}></Route>
                     <Route path="/"  component ={Login} ></Route>
                </div>
      </Router>
    );
  }
}

export default App;