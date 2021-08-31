import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignupForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
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
        name="Email"
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
  );
};
export default SignupForm;