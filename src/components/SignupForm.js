import React from "react";
import { Form, Input, Button, Checkbox, notification, Select } from 'antd';
import { UserOutlined, LockOutlined, PhoneTwoTone } from '@ant-design/icons';
import AuthApi from "../services/Auth";



const {Option}=Select;
const SignupForm = () => {
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);
   const response= await AuthApi.signup(values);
   if(!response){
     return notification.error({message:"Failed to signup"});

   }

   if(response.data.status===200){
     notification.success({message:"Registered succesfuly"});

   }
   else{
    return notification.error({message:"Failed to signup, please try again."});
   }
  

  };

  return (
    <div style={{padding:"15%"}}>
      <h1 style={{color:"indigo"}} >Signup Form</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="firstName"
        type="text"
        rules={[{ required: true, message: 'Please input your  first name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="firstName" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: 'Please input your  last name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="lastName" />
      </Form.Item>
     <Form.Item
        name="gender"
        rules={[{ required: true, message: 'Please input your  gender' }]}
      >
               <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="age"
        rules={[{ required: true, message: 'Please input your  age' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Age" />
      </Form.Item>
   <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input your  phone number' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="phoneNumber" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your  Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
 
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
       
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>      
      </Form.Item>
    </Form>
    </div>
  );
};
export default SignupForm;