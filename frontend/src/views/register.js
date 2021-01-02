import React from 'react';
import axios from 'axios'
import makeToast from '../Toaster'


const register = () => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const registerUser = () => {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      axios.post("http://localhost:8000/user/register", {
        name, email, password
      }).then(response =>{
        console.log(response.data)
        makeToast("success", response.data.message);
      }).catch(err => {
        console.log(err)
        //makeToast("success", err.message.data.message)
      });
  }
  
  return (
    <div className="card">
    <div className="cardHeader">Registre-se</div>
    
    <div className="cardBody">

    <div className="inputGroup">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="Seu nome" ref={nameRef}/>
    </div>
    
    <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="seuemail@gmail.com" ref={emailRef}/>
    </div>

    <div className="inputGroup">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Sua senha" ref={passwordRef}/>
    </div>

    <button onClick={registerUser}>Registrar</button>
    
    </div>

</div>
  )
}

export default register;