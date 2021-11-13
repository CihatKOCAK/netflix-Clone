import "./register.scss"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import axios from 'axios';

export default function Register() {
  const history = useHistory();


  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleStart = () => {
    setStep(1)
  }

  const handleFinish = async (e) => {
    e.preventDefault();

    /*
axios.post(url, body,{headers: { 'Content-Type': 'application/json'}}
    ).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    */


    const body = { email: email, name: name, password: password };
    const url = "http://localhost:3002/register";
    axios.post(url, body
    ).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    history.push("/");
    /*
    console.log("data: ", body)
      await axios.post(url, body);
      history.push("/");
    */

  }
  // await axios.post(
  //   url,{ email, name, password }).then(function (response) {
  //     console.log("data", response);

  //   }


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            href="/"
          />
          <button className="loginButton" type="button" onClick={() => history.push('/')}> Sign In  </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {step === 0 ? (
          <div className="input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>)}
      </div>
    </div>
  );
}
