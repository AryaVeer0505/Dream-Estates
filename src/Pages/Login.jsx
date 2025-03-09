import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Form 
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-500" />} 
              placeholder="Username or Email" 
              className="py-2 px-4 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input 
              prefix={<LockOutlined className="text-gray-500" />} 
              type="password" 
              placeholder="Password" 
              className="py-2 px-4 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Checkbox className="text-gray-600">Remember me</Checkbox>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button 
              block 
              type="primary" 
              htmlType="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full transition"
            >
              Log in
            </Button>
          </Form.Item>

          <div className="text-center text-gray-600">
            Don't have an account? 
            <NavLink 
              to="/register" 
              className="text-blue-600 hover:underline ml-1"
            >
              Register now!
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
