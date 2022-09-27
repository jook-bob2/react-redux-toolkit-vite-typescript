import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState, UserState } from '../states';

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        set: (state, action: PayloadAction<UserState>) => {
            return { ...action.payload, isLogin: true };
        },
        init: () => {
            return initialUserState;
        },
    },
});

export const userReducer = userSlice.reducer;
