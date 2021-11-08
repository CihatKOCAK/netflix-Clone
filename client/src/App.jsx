import "./app.scss"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch";
import LoginP from "./pages/login/LoginP";
import Register from "./pages/register/Register";
import NoMatch from "./pages/notfound/Notfound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from "react";

const App = () => {



  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginP />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      </Router>
    </div>





  );
};

export default App;