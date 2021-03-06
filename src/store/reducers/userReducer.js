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
export function loginInfo(state = { success: false }, action) {
    switch (action.type) {
        case LOGIN_INFO:
            return action.data;
        default:
            return state;
    }
}
