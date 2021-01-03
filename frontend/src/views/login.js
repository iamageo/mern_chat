import React from 'react';
import axios from 'axios'
import makeToast from '../Toaster';

const login = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios.post("http://localhost:8000/user/login", {
      email, password
    }).then((response) =>{
      console.log(response.data)
      makeToast("success", response.data.message);
      localStorage.setItem('token', response.data.token);
      props.history.push("/dashboard")
    })
    .catch((err) => {
      // console.log(err);
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      )
        makeToast("error", err.response.data.message);
    });
}

  return (
    <div className="card">
        <div className="cardHeader">Entrar</div>
        
        <div className="cardBody">
        
        <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="abc@gmail.com" ref={emailRef}/>
        </div>

        <div className="inputGroup">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Sua senha" ref={passwordRef}/>
        </div>

        <button onClick={loginUser}>Entrar</button>
        
        </div>

    </div>
  )
}

export default login;