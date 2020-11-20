import React from 'react';
import styled from 'styled-components/macro';
import { Form, Input, Button } from 'antd';
import { apiLogin } from '@apis';
import { disPatchLoginInfo } from '@actions/userAction';
import { useDispatch } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAncpQXcc6UAlllACYvqDzrpQnemgsDKbk',
    authDomain: 'member-database-fdf1e.firebaseapp.com',
    databaseURL: 'https://member-database-fdf1e.firebaseio.com',
    projectId: 'member-database-fdf1e',
    storageBucket: 'member-database-fdf1e.appspot.com',
    messagingSenderId: '398211092204',
    appId: '1:398211092204:web:e56a27f2a566c36e69dfc9',
    measurementId: 'G-19CNHH96GK',
};

function Login() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        /*firebase方式*/
        firebase
            .auth()
            .signInWithEmailAndPassword(values.username, values.password)
            .then(() => {
                dispatch(
                    disPatchLoginInfo({
                        success: true,
                        type: '測試測試',
                    })
                );
                alert('恭喜 登入成功');
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

        /*call Yapi方式*/
        // apiLogin().then(function (response) {
        //     // handle success
        //     dispatch(disPatchLoginInfo(response.data));
        // });
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
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
        </FirebaseAuthProvider>
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
