import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/css/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("➡️ Form Submitted: ", values);


    const userData = {
      username: values.email,
      firstname: values.firstname,
      lastname: values.lastname,
      mobile: values.number,
      email: values.email,
      password: values.password,
    };


    axios
      .post("http://localhost:5000/api/auth/register", userData)
      .then((response) => {
        console.log("✔️ Registration Successful:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Axios Error:", error.response?.data || error.message);
      });
  };

  return (
    <div className="main-container">
      <div className="container">
        <Form
          name="register"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "Please enter your first name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please enter your last name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="number"
            rules={[{ required: true, message: "Please enter your mobile number!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Mobile Number" type="tel" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please create your password!" }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Create Password" />
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
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
            or <NavLink to="/login">Login now!</NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
