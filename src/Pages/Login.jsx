import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';
import '../assets/css/login.css'
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
  };
  const navigate=useNavigate()
    const handleNavigate=()=>{
          navigate("/register")
    }
  return (
    <div className="main-container">
    <div className="container">
    <Form 
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username or Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <NavLink href="" onClick={handleNavigate}>Register now!</NavLink>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default Login;