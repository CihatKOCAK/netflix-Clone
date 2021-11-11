import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.scss";

export default function Login({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault();
    setDetails(details)
    console.log(setDetails);
    Login(details);
  }


  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <h1>Sign In</h1>
          {/* ERROR */ (error !== "") ? ( <div className = "error"> {error} </div>): ""}
          <input type="email" placeholder="Email or phone number" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          <input type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          <button type="submit"  className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b><NavLink className="tags" to="/register">Sign up</NavLink> now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>

      </div>
    </div>
  );
}