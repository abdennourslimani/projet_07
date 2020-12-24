import React ,{ useState } from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';

function App () {
  const [nameReg,setNameReg] = useState("");
  const [surnameReg , setSurNameReg] = useState("");
  const [emailReg,setEmailReg] = useState("");
  const [passwordReg , setPasswordReg] = useState("");



  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");


  //const [loginStatus, setLoginstatus] = useState("");

  
  const register = () =>{
    Axios.post("http://localhost:3000/api/auth/signup",{
            name : nameReg , 
            surname: surnameReg,
            email : emailReg, 
            password : passwordReg
      }).then((response) => {
        console.log(response);
    });
  }

  const login = () =>{
    Axios.post("http://localhost:3000/api/auth/login",{ 
        email : email, 
        password : password
    }).then((response) => {
          console.log(response)
    });
  }

    return (
      <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
            <form className="bg-white border p-5 d-flex flex-column">
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" onChange= {(e) =>{
                    setNameReg(e.target.value)
                  }}/>
              </div>
              <div className="form-group">
                  <label>surname</label>
                  <input type="text" className="form-control" onChange= {(e) =>{
                    setSurNameReg(e.target.value)
                  }} />
              </div>

              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control"  onChange= {(e) =>{
                    setEmailReg(e.target.value)
                  }}/>
              </div>
              <div className="form-group">
                  <label>password</label>
                  <input type="password" className="form-control"  onChange= {(e) =>{
                    setPasswordReg(e.target.value)
                  }}/>
              </div>            
              <button onClick={register} type="submit" className="btn btn-primary"> register</button>
            </form>

            <form className="bg-white border p-5 d-flex flex-column">
            <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control"  onChange= {(e) =>{
                    setEmail(e.target.value)
                  }}/>
              </div>
              <div className="form-group">
                  <label>password</label>
                  <input type="password" className="form-control"  onChange= {(e) =>{
                    setPassword(e.target.value)
                  }}/>
              </div>            
              <button onClick={login} type="submit" className="btn btn-primary"> login</button>
              <h1>{loginStatus}</h1>
            </form>        
      </div>
      
    ) 








}

ReactDom.render(<App />, document.getElementById('root'));