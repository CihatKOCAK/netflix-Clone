import "./app.scss"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch";
import LoginP from "./pages/login/LoginP";
import Register from "./pages/register/Register";
import NoMatch from "./pages/notfound/Notfound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from "react";
import { Redirect } from 'react-router';

const App = () => {
  const userData = {

    email: "user@user.com",
    name: "Cihat KOÇAK",
    password: "123"

    /*
    "user": {
      "0": {
        email: "user@user.com",
        name: "Cihat KOÇAK",
        password: "123"
      },
      "1": {
        email: "user2@user.com",
        name: "Eren Şahin",
        password: "123"
      }
    }
    */
  }



  const [user, setUser] = useState({ email: "asd", name: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === userData.email && details.password === userData.password) {
      console.log("Logged in!");
      setUser({
        //add name 
        email: details.email
      })

    }
    else {
      console.log("Details do not match")
      setError("Details do not match!")
    }
  }
  const Logout = () => {
    setUser({
      email: "",
      name: ""
    })
    console.log("Logout");
  }



  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            {(user.email === "") ? (
              <LoginP Login={Login} error={error} />
            ) : (
              <Home Logout={Logout} />
            )}
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