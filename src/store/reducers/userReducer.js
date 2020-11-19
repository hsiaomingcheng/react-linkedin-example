import { USER_INFO, LOGIN_INFO } from '@actions/userAction';

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
export function loginInfo(state = {}, action) {
    switch (action.loginInfo) {
        case LOGIN_INFO:
            return action;
        default:
            return state;
    }
}
