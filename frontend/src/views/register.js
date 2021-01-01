import React from 'react';

const register = () => {
  return (
    <div className="card">
    <div className="cardHeader">Registre-se</div>
    
    <div className="cardBody">

    <div className="inputGroup">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="Seu nome"/>
    </div>
    
    <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="seuemail@gmail.com"/>
    </div>

    <div className="inputGroup">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Sua senha"/>
    </div>

    <button>Registrar</button>
    
    </div>

</div>
  )
}

export default register;