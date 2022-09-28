import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiReducers } from './create/user';

export const store = configureStore({
    reducer: apiReducers,
});

export type ApiDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
