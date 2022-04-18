import React from "react";
import "./login.css"

function LogIn() {
    return (
    <>
    <h1>Sign up</h1>
    <div className="inputs">
        
        <div id="from">
    <label for="name">Login</label>
    <input type="text" placeholder="Login" id="name" name="user_name"/>
  </div>

  <div id="reply">
    <label for="mail">Email</label>
    <input type="email" placeholder="email" id="mail" name="user_email"/>
  </div>

  <div id="message">
    <label for="msg">Password</label>
    <input type="password" placeholder="password" name="user_password"/>
  </div>

  <div class="button">
  <button class="cta">
  <span>Get Ready</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
  </div>

  
  </div>
  </>)
  }


  export default LogIn