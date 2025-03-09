import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const onFinish =async (values) => {
    console.log("Form Submitted: ", values);
   await axios
      .post("http://localhost:5000/api/auth/register", values)
      .then((response) => {
        console.log("Registration Successful:", response);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Axios Error:", error.response?.data || error.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black bg-opacity-80">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <Form name="register" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "Please enter your first name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="First Name" className="py-2" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please enter your last name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Last Name" className="py-2" />
          </Form.Item>

          <Form.Item
            name="number"
            rules={[{ required: true, message: "Please enter your mobile number!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Mobile Number" type="tel" className="py-2" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" type="email" className="py-2" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please create your password!" }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Create Password" className="py-2" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" className="py-2" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className="bg-green-600 hover:bg-green-700 w-full py-2 text-white">
              Register
            </Button>
            <p className="text-center mt-2">
              or <NavLink to="/login" className="text-blue-600 hover:underline">Login now!</NavLink>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
