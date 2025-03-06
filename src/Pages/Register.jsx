import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';
import '../assets/css/Register.css'
import axios from "axios";


const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post("http://localhost:3000/api/auth/register",values).then((response)=>console.log(response))
  };
  
  const navigate=useNavigate()
    const handleNavigate=()=>{
          navigate("/login")
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
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="First name" />
        </Form.Item>
        <Form.Item
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Last name" />
      </Form.Item>
        <Form.Item
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input your number!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Mobile Number" type='number'/>
      </Form.Item>
        <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" type='email'/>
      </Form.Item>
      <Form.Item
        name="create password"
        rules={[
          {
            required: true,
            message: 'Please create your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Create Password" />
      </Form.Item>
      <Form.Item
        name="confirm password"
        rules={[
          {
            required: true,
            message: 'Please confirm your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
      </Form.Item>
     

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
        or <NavLink href="" onClick={handleNavigate}>Login now!</NavLink>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default Register;