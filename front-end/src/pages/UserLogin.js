import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const [form] = Form.useForm();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      console.log(password,usernameOrEmail);
      const response = await fetch('http://127.0.0.1:8000/store/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: usernameOrEmail,
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
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        label="Username or Email"
        name="username"
        rules={[{ required: true, message: 'Please enter your username or email' }]}
      >
        <Input
          type="text"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          placeholder="Username or Email"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>

      {error && <span>{error}</span>}

    </Form>
  );
};

export default LoginForm;