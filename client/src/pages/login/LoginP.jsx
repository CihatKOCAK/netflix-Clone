import { useState, useEffect, useContext, useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.scss";
import axios from 'axios';

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });

  let history = useHistory();

  
  function handleOnClick() {
    history.push('/home');
  }

  /*
    const submitHandler = e => {
      
      
      e.preventDefault();
   
      if (details.email.length > 0 && details.password.length > 0) {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('http://localhost:3001/users/', { mail: 'deneme2@gmail.com', name: 'deneme', password: '123' })
          .then((response) => {
            console.log("Logged in", response.data.name);
          })
          .catch((error) => {
            console.log('hatalı mail', error);
          })
        console.log("asd")
   
      }
      console.log(axios.post('http://localhost:3001/users', { mail: 'deneme2@gmail.com', name: 'deneme', password: '123' }));
   
  */



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
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          <input type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          <button type="button" onClick={handleOnClick} className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b><NavLink className="tags" to = "/register">Sign up</NavLink> now.</b>
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