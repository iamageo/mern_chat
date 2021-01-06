
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import index from './views/index';

import dashboard from './views/dashboard';
import login from './views/login';
import register from './views/register';
import chatroom from './views/chatroom';

function App() {
  return <BrowserRouter>
            <Switch>

             <Route path="/" component={index} exact/>
              <Route path="/login" component={login} exact/>
              <Route path="/register" component={register} exact/>
              <Route path="/dashboard" component={dashboard} exact/>
              <Route path="/chatroom/:id" component={chatroom} exact/>
              
              
            </Switch>
         </BrowserRouter>
}

export default App;
