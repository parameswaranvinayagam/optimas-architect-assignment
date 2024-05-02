import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './views/LoginPage';
import DashBoard from './views/DashBoard';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">            
       {isLoggedIn ? <DashBoard /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
