/*
 * action type
 */

export const USER_INFO = 'USER_INFO';
export const LOGIN_INFO = 'LOGIN_INFO';

/*
 * action creator
 */

export function getUserInfo(data) {
    return { type: USER_INFO, data };
}

export function disPatchLoginInfo(data) {
    console.log('data', data);
    return { type: LOGIN_INFO, data };
}
