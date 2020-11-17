import { USER_INFO } from '@actions/userAction';

export function userInfo(state = {}, action) {
    switch (action.type) {
        case USER_INFO:
            return action.data;
        default:
            return state;
    }
}
