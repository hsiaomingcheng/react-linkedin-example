import { combineReducers } from 'redux';
import { userInfo, isLogin } from '@reducers/userReducer';

const rootReducer = combineReducers({
    userInfo,
    isLogin,
});

export default rootReducer;
