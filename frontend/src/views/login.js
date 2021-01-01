import React from 'react';

const login = () => {
  return (
    <div className="card">
        <div className="cardHeader">Entrar</div>
        
        <div className="cardBody">
        
        <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="abc@gmail.com"/>
        </div>

        <div className="inputGroup">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Sua senha"/>
        </div>

        <button>Entrar</button>
        
        </div>

    </div>
  )
}

export default login;