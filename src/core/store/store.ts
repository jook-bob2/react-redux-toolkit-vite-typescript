import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { counterReducer } from './global/slices/counter';
import { userReducer } from './global/slices/user';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        userInfo: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
