import { postSignIn } from '@/core/api/user/userApi';
import { createAsyncDispatcher } from '../createAsyncDispatcher';
import { createAsyncSlice } from '../createAsyncSlice';

enum UserCreteType {
    userLoginApi = 'userLoginApi',
}

export const USER_SIGN_IN_SLICE = createAsyncSlice(UserCreteType.userLoginApi);
export const POST_USER_SIGN_IN = createAsyncDispatcher(USER_SIGN_IN_SLICE, postSignIn);

export const userReducers = {
    [UserCreteType.userLoginApi]: USER_SIGN_IN_SLICE.reducer,
};
