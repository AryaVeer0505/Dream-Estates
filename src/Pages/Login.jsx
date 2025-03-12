// import React, { useState } from 'react'
// import { Link, NavLink,useNavigate } from 'react-router'
// import axios from 'axios'

// const Register = () => {

//   const [email,setEmail]=useState()
//   const [password,setPassword]=useState()
 

//   const navigate=useNavigate()
//   const handleNavigate=()=>{
//         navigate("/register")
//   }
//  const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post('http://localhost:5001/api/auth/login',{email,password})
//     .then(result=>{console.log("Result",result)
//       if(result.data==="Success"){
//       navigate('/')
//       }
//     })
//     .then(err=>console.log("error",err))
//  }
//   return (
//     <div>
//       <div className="w-full h-screen bg-[#222] flex justify-center items-center">
//         <div className="w-100 bg-black text-white p-6 rounded-lg shadow-2xl  items-center justify-center">
//           <h1 className='text-center font-bold text-3xl mb-7'>Login</h1>
//           <form className='flex flex-col' onSubmit={handleSubmit}>
    
    
//           <div className='mb-4'>
//             <input type="email" placeholder='Email' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="email" onChange={(e)=>setEmail(e.target.value)}/>
//           </div>
//           <div className='mb-4' >
            
//             <input type="password" placeholder='Password' className='border-0 rounded-md outline-0 p-1 w-full pl-2  bg-gray-700 focus:bg-gray-600 focus:outline-0 transition ease-in-out duration-150 placeholder-gray-300' required name="password" onChange={(e)=>setPassword(e.target.value)}/>
//           </div>
         
//           <button className='bg-green-500 text-white text-center py-1 px-2 text-lg rounded-lg font-bold hover:text-white hover:bg-gray-700 transition ease-in-out duration-150 block ' type='submit'>Login</button>
//           <p className='mt-4 text-center'>Don't have an Account? <NavLink to='/register' onClick={handleNavigate} className="text-green-500">Register</NavLink></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register


import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const onFinish =async (values) => {
    console.log("Data Submitted: ", values);
      try{
        const {email,password} = values;
     const response= await axios
      .post("http://localhost:5001/api/auth/login", {email,password})
        if(response.data.success){
          message.success(response.data.message)
        navigate("/");
        console.log("Successfully login")
        }
        else{
          message.error(response.data.message)
          console.log("Error",response.data.message)
        }
      
    }
    catch(error){
      console.log("Error message",error.response?.data)
      message.error(error.response?.data?.message || "login failed")
    }    
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
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-500" />} 
              placeholder="Email" 
              className="py-2 px-4 w-full border border-gray-300 rounded-md focus:border-green-500 focus:ring focus:ring-blue-200"
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
              className="py-2 px-4 w-full border border-gray-300 rounded-md focus:border-green-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Checkbox className="text-gray-600">Remember me</Checkbox>
              <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button 
              block 
              type="primary" 
              htmlType="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition"
            >
              Log in
            </Button>
          </Form.Item>

          <div className="text-center text-gray-600">
            Don't have an account? 
            <NavLink 
              to="/register" 
              className="text-green-600 hover:underline ml-1"
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