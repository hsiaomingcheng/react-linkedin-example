import { combineReducers } from 'redux';
import { userInfo, loginInfo } from '@reducers/userReducer';

const rootReducer = combineReducers({
    userInfo,
    loginInfo,
});

export default rootReducer;
