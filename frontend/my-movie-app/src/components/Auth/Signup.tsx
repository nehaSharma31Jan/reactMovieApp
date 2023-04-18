import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signup } from '../../api';
import { User } from '../../types/User';

import "../../css/footerStyle.css";
import '../../css/loginStyle.css'
import WelcomeNavbar from '../Navbar/WelcomeNavbar';
import FooterHere from '../footer/FooterHere';

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();


  const onFinish = async (values: User) => {
    setLoading(true);
    try {
      await signup(values.name, values.email, values.password);
      message.success('Signup successful! Please login to continue.');
      form.resetFields();
    } catch (error) {
      const typedError = error as Error;
      message.error(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {/* <WelcomeNavbar/> */}
      <div className='form-container'>
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign up
        </Button>
      </Form.Item>

    </Form>
<a href='login'>Already having an account ? </a>
    </div>

        <FooterHere/>
    </React.Fragment>
  );
};

export default Signup;
