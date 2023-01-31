import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './signup/Signup';
import Home from "./Home";
import Login from './login/Login';
import Logout from './logout/Logout';

const App = () => {
    return (
        <BrowserRouter history={window.history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Signup} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
        </Switch>
      </BrowserRouter>
    )
}

export default App;