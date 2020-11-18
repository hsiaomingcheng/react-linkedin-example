import React from 'react';
import styled from 'styled-components/macro';
import { Form, Input, Button } from 'antd';

function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <div className="board-container"></div>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '請輸入帳號!',
                        },
                    ]}
                >
                    <Input placeholder="帳號" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '請輸入密碼!',
                        },
                    ]}
                >
                    <Input.Password placeholder="密碼" />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="submit-button"
                        type="primary"
                        htmlType="submit"
                    >
                        登入
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f2f5;
    height: 100vh;

    form {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
        padding: 30px;
        width: 500px;

        input,
        .ant-input-password {
            border-radius: 6px;
            font-size: 20px;
        }

        .ant-form-item {
            &:last-child {
                margin-bottom: 0;
            }
        }

        .submit-button {
            border-radius: 6px;
            width: 100%;
            height: auto;
            font-size: 20px;
            font-weight: bolder;
        }
    }
`;
