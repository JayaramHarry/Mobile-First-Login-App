import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import "./style.css"

const Login = () => {

  const [username, setUsername] = useState('harry');
  const [password, setPassword] = useState('harry123');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigate = useNavigate();

  const dummyCredentials = {
    username: 'harry',
    password: 'harry123'
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      navigate('/home');  
    } else {
      if (username !== dummyCredentials.username) {
        setUsernameError('Incorrect username');
      } else {
        setUsernameError('');
      }
      if (password !== dummyCredentials.password) {
        setPasswordError('Incorrect password');
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <div className="container"> 
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
          {usernameError && <div className="text-danger">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p>*The username and password are pre-filled. Click the login button to proceed.</p>
      </form>
    </div>
  );
};

export default Login;
