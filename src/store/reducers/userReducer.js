import { USER_INFO } from '@actions/userAction';

// 使用者資訊
export function userInfo(state = {}, action) {
    switch (action.type) {
        case USER_INFO:
            return action.data;
        default:
            return state;
    }
}

// 登入資訊
export function isLogin(state = false, action) {
    switch (action.loginInfo) {
        case USER_INFO:
            return action.success;
        default:
            return state;
    }
}
