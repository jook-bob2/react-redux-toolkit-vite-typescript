import { userSlice } from '@/core/store/global/slices/user';
import { useAppDispatch, useAppSelector } from '@/core/store/global/hooks';
import { RootState } from '@/core/store/global/store';

export default function useUserInfo() {
    const userInfo = (state: RootState) => state.userInfo;

    return {
        userInfo: useAppSelector(userInfo),
        dispatch: useAppDispatch(),
        actions: userSlice.actions,
    };
}
