import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('customer');

    const handleSubmit = async () => {
        try {
            await form.validateFields();
            // Form validation successful, continue with registration
            if (password !== repeatPassword) {
                throw new Error('Passwords do not match');
            }

            const response = await fetch('http://127.0.0.1:8000/store/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    phone_number: phoneNumber,
                    role
                }),
            });

            if (response.ok) {
                // Registration successful, handle accordingly (e.g., redirect to login page)
                console.log('Registration successful');
            } else {
                // Registration failed, handle accordingly (e.g., display error message)
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please enter your username' }]}
            >
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="repeatPassword"
                rules={[
                    { required: true, message: 'Please repeat your password' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords do not match'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    placeholder="Repeat Password"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
            >
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
                <Input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;