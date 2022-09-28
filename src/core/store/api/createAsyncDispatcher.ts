import { ServerResponse } from '@/core/api/type';
import { AnyAction, Dispatch, Slice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { InitialApiState } from './states/type';

export function createAsyncDispatcher(
    slice: Slice<
        InitialApiState,
        {
            apiCall: (state: any) => void;
            apiCallSuccess: (state: any, action: any) => void;
            apiCallFailure: (state: any, action: any) => void;
        },
        any
    >,
    promiseFn: (...rest: any) => Promise<AxiosResponse<ServerResponse>>,
) {
    const { apiCall, apiCallFailure, apiCallSuccess } = slice.actions;

    async function actionHandler(dispatch: Dispatch<AnyAction>, ...rest: any) {
        dispatch(apiCall());

        try {
            const data = await promiseFn(...rest);

            dispatch(apiCallSuccess({ ...data }));

            return Promise.resolve({ ...data });
        } catch (e) {
            dispatch(apiCallFailure(e));

            return Promise.reject(e);
        }
    }

    return actionHandler;
}
