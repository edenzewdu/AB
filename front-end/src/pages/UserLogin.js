import React, { useState } from 'react';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameOrEmail,
          password: password,
        }),
      });

      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect to dashboard)
        console.log('Login successful');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username or Email:</label>
        <input
          type="text"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <span>{error}</span>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;