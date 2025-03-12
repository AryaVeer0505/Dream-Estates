// import React, { useState } from 'react'
// import { Link, NavLink,useNavigate } from 'react-router'
// import axios from 'axios'

// const Register = () => {
//   const [firstname,setFirstName]=useState()
//   const [lastname,setLastName]=useState()
//   const [number,setNumber]=useState()
//   const [email,setEmail]=useState()
//   const [password,setPassword]=useState()
//   const [confirmPassword,setConfirmPassword]=useState()

//   const navigate=useNavigate()
//   const handleNavigate=()=>{
//         navigate("/login")
//   }
//  const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post('http://localhost:5001/api/auth/register',{firstname,lastname,number,email,password,confirmPassword})
//     .then(result=>{console.log("Result",result)
//       navigate('/login')
//     })
//     .then(err=>console.log("error",err))
//  }
//   return (
//     <div>
//       <div className="w-full h-screen bg-[#222] flex justify-center items-center">
//         <div className="w-100 bg-black text-white p-6 rounded-lg shadow-2xl  items-center justify-center">
//           <h1 className='text-center font-bold text-3xl mb-7'>Register</h1>
//           <form className='flex flex-col' onSubmit={handleSubmit}>
//           <div className='flex space-x-4 mb-4'>
//             <input type="text" placeholder='First Name' className='border-0 rounded-md outline-0 p-1 w-1/2 pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="firstname" onChange={(e)=>setFirstName(e.target.value)}/>
//             <input type="text" placeholder='Last Name' className='border-0 rounded-md outline-0 p-1 w-1/2 pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="lastname"
//             onChange={(e)=>setLastName(e.target.value)}/>
//           </div>
//           <div className='mb-4'>
//             <input type="number" placeholder='Enter your Number' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="number" onChange={(e)=>setNumber(e.target.value)}/>
//           </div>
//           <div className='mb-4'>
//             <input type="email" placeholder='Enter your Email' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="email" onChange={(e)=>setEmail(e.target.value)}/>
//           </div>
//           <div className='mb-4' >
            
//             <input type="password" placeholder='Create a Password' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="password" onChange={(e)=>setPassword(e.target.value)}/>
//           </div>
//           <div   className='mb-4' >
          
//             <input type="password" placeholder='Confirm Password' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
//           </div>
//           <button className='bg-green-500 text-white text-center py-1 px-2 text-lg rounded-lg font-bold hover:text-white hover:bg-gray-700 transition ease-in-out duration-150 block ' type='submit'>Submit</button>
//           <p className='mt-4 text-center'>Already have an Account? <NavLink to='/login' onClick={handleNavigate} className="text-green-400">Login</NavLink></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register


// import React from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router";
// import { NavLink } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();

//   const onFinish =async (values) => {
//     console.log("Form Submitted: ", values);
//    await axios
//       .post("http://localhost:5001/api/auth/register", values)
//       .then((response) => {
//         console.log("Registration Successful:", response);
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error("Axios Error:", error.response?.data || error.message);
//       });
//   };


//   return (
//     <div className="flex items-center justify-center h-screen bg-black bg-opacity-80">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
//         <Form name="register" initialValues={{ remember: true }} onFinish={onFinish}>
//           <Form.Item
//             name="firstname"
//             rules={[{ required: true, message: "Please enter your first name!" }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="First Name" className="py-2" />
//           </Form.Item>

//           <Form.Item
//             name="lastname"
//             rules={[{ required: true, message: "Please enter your last name!" }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="Last Name" className="py-2" />
//           </Form.Item>

//           <Form.Item
//             name="number"
//             rules={[{ required: true, message: "Please enter your mobile number!" }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="Mobile Number" type="tel" className="py-2" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             rules={[{ required: true, message: "Please enter your email!" }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="Email" type="email" className="py-2" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Please create your password!" }]}
//           >
//             <Input prefix={<LockOutlined />} type="password" placeholder="Create Password" className="py-2" />
//           </Form.Item>

//           <Form.Item
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Please confirm your password!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match!"));
//                 },
//               }),
//             ]}
//           >
//             <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" className="py-2" />
//           </Form.Item>

//           <Form.Item>
//             <Button block type="primary" htmlType="submit" className="bg-green-600 hover:bg-green-700 w-full py-2 text-white">
//               Register
//             </Button>
//             <p className="text-center mt-2">
//               or <NavLink to="/login" className="text-green-600 hover:underline">Login now!</NavLink>
//             </p>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();


  const onFinish = async (values) => {
    console.log("Form Submitted: ", values);
    axios.post("http://localhost:5001/api/auth/register",values)
    .then((response)=>{
      console.log("response",response)
      navigate("/login")
    })
    .catch((error)=>console.error("error",error))
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <Form name="register" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your first name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="User Name" />
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
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Register
            </Button>
            <p className="text-center mt-2">
              Or <NavLink to="/login" className="text-blue-600 hover:underline">Login now!</NavLink>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
