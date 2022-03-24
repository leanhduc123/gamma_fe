import './style.scss';
import { Form, Input, Button, Divider, Space } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
  ProjectOutline,
} from '@ant-design/icons';
import addNotification, { NOTIFICATION_TYPE } from '../notification';
import { useHistory } from 'react-router-dom';
import { regist } from '../../service/api';

export const Register = () => {
  const history = useHistory();
  const onFinish = (values) => {
    regist(values)
      .then((res) => {
        addNotification('Tạo tài khoản thành công', NOTIFICATION_TYPE.SUCCESS);
        history.push('/');
      })
      .catch((err) => addNotification(err.message, NOTIFICATION_TYPE.ERROR));
  };
  return (
    <>
      <div className="container">
        <div className="background"></div>
        <div className="form-container">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item wrapperCol={{ span: 24 }}>
              <div className="img-contain">
                <img
                  src="https://gama-platform.org//resources/images/general/GamaPlatform.png"
                  alt="gamma-icon"
                  width={50}
                  height={50}
                />
              </div>
            </Form.Item>
            <Divider style={{ marginBottom: 30 }} />
            <Space direction="vertical">
              <Form.Item
                name="name"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter username..."
                />
              </Form.Item>

              <Form.Item
                name="email"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: 'Please input your email!' },
                  {
                    pattern: /\S+@\S+\.\S+/,
                    message: 'Not email format!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter email..."
                />
              </Form.Item>

              <Form.Item
                name="password"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password
                  placeholder="Enter password..."
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="password_confirmation"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: 'Please input confirm password!' },
                ]}
              >
                <Input.Password
                  placeholder="Enter confirm password..."
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  style={{ width: '100%' }}
                  type="submit"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                Already have account?
                <Button type="link" href="/">
                  Log in here
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </div>
      </div>
    </>
  );
};
