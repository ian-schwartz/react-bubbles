import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {

  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('bubbles');
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
          />
          <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          />
          <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
