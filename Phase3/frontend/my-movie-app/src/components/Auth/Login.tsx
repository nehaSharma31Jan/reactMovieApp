import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../css/loginStyle.css';
import "../../css/footerStyle.css";
import WelcomeNavbar from '../Navbar/WelcomeNavbar';
import FooterHere from '../footer/FooterHere';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values: any) => {
    setLoading(true);
  
    try {
      const response = await login(values.username, values.password);
      console.log(response)
      message.success('Login successful');
      navigate('/');
    } catch (error) {
      const typedError = error as Error;
      message.error(typedError.message);
      setLoading(false);
    }
  };
  

  return (

    <React.Fragment>
    {/* <WelcomeNavbar/> */}
    <div className="container">
      


    <div className="form-container">
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="form-button"
          >
            Log In
          </Button>
        </Form.Item>

      </Form>

      <a href='signup'>Create an new account ? </a>
    </div>
  
    </div>
          <FooterHere/>
    </React.Fragment>
  );
};

export default Login;
