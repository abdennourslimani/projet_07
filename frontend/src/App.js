import React from 'react';
import {Header, Login,Register} from './components'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="App">
          <Header />
          <Login />
          <Register />
      </div>
    );
  }
}

export default App;