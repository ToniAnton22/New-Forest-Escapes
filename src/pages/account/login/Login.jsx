import './login.css'
import React from 'react'
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
  return (
    <div className="login">
    <div className="loginLeft"></div>
    <div className="loginRight">
      <form className="loginForm">
      <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
      <div className="loginTitle">Login</div>
      <label>Username</label>
          <input type="text" className="loginInput" placeholder="Enter your Username"/>
          <label>Password</label>
          <input type="password" className="loginInput" placeholder="Enter your Password"/>
          <button className="loginButton" type="submit">Login</button>
          <p className="existingAcc">Dont have an account? Sign up <Link className="loginLink" to ="/register">here</Link></p>
      </form>
  </div>
  </div>
  )
}
