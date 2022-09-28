import { postSignIn } from '@/core/api/user/userApi';
import { createAsyncDispatcher } from '../createAsyncDispatcher';
import { createAsyncSlice } from '../createAsyncSlice';

export type UserApiType = 'userLogin';

export const USER_SIGN_IN_SLICE = createAsyncSlice('userLogin');
export const POST_USER_SIGN_IN = createAsyncDispatcher(USER_SIGN_IN_SLICE, postSignIn);

export const apiReducers = {
    [USER_SIGN_IN_SLICE.name as UserApiType]: USER_SIGN_IN_SLICE.reducer,
};
