// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import { useHistory } from "react-router-dom";


function LoginPage({ onLogin }) {  
  let history = useHistory();
  const gotToNewPage=()=>{    
    debugger;   
    //this.props.history.push('/dashboard');
    //this.props.history.push('/dashboard')
  }  

  return (
    <div className="login-page">
      <div className='logo-container'>
        <div className='logo-image'>
          
        </div>
      </div>

      <div className='login-container'>

          <div className='logo-img'></div>
          <div>

          <form className="login-form" >
          <h2>Login</h2>
          
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
         <button type="submit" onClick={onLogin}>SIGN IN</button>
        </form></div>
      </div>
     
    </div>
  );
}

export default LoginPage;
