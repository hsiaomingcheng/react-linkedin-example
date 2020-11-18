import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
    baseURL: 'https://yapi.baidu.com/mock/12883',
});

// User相關的 api
export const apiUserInfo = (data) => userRequest.get('/userInfo', data);

// 登入 api
export const apiLogin = (data) => userRequest.post('/login', data);
