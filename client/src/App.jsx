import "./app.scss"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch";
import LoginP from "./pages/login/LoginP";
import RegisterP from "./pages/register/RegisterP";
import NoMatch from "./pages/notfound/Notfound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

const App = () => {
  const [logined, setLogined] = useState(false);
  const [error, setError] = useState("");
  const url = "http://localhost:3002/users/";

  const Login = async detailsLogin => {

    await axios.post(
      url + detailsLogin.email).then(function (response) {
      console.log("data", response);

    if (detailsLogin.email === response.data.email && detailsLogin.password === response.data.password) {
      console.log("Logged in!");
      setLogined(true);
    }
    else {
      console.log("Details do not match")
      setError("Details do not match!" )
    }
    })
      .catch(function (response) {
        //handle error
        console.log("Details do not match", response)
      setError("Details do not match!")
      });

  };

  const Logout = () => {
    setLogined(false)
    setError("")
    console.log("Logout");
  };

  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            {(logined === false) ? (
              <LoginP Login={Login} error={error} />
            ) : (
              <Home Logout={Logout} />
            )}
          </Route>
          <Route path="/register">
            <RegisterP/>
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