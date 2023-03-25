import './register.css'
import React from 'react'
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

  return (
    <div className="register">
      <div className="registerLeft"></div>
      <div className="registerRight">
        <form className="registerForm">
        <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
        <div className="registerTitle">Register</div>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Username"/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email"/>
            <label>Password</label>
            <input type="password" className="registerInput" id="pw1" placeholder="Enter your Password"/>
            <label>Confirm Password</label>
            <input type="password" className="registerInput" id="pw2" placeholder="Confirm your Password"/>
            <button className="registerButton" type="submit">Register</button>
            <p className="existingAcc">Already have an account? Log in <Link className="links" to="/login">here</Link></p>
        </form>
    </div>
    </div>
  )
}
