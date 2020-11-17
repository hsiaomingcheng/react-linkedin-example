/*
 * action type
 */

export const USER_INFO = 'USER_INFO';

/*
 * action creator
 */

export function getUserInfo(data) {
    return { type: USER_INFO, data };
}
