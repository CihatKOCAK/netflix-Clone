import "./register.scss"
import { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import axios from 'axios';

export default function Register() {
  const history = useHistory();
    const url = "http://localhost:3002/register";

    const [step, setStep] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleStart = () => {
        setStep(1)
    }
    const handleFinish = async (e) => {
        e.preventDefault();
        console.log("data: ", email, password, name)
        try {
            await axios.post(url, { email, name, password });
            history.push("/");
        } catch (err) { }
    }


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">
            <NavLink to="/" className="tags"> Sign In </NavLink>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        { step === 0 ? (
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
