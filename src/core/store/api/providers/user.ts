import { SignInRequest } from '@/core/api/user/type';
import { POST_USER_SIGN_IN } from '../create/user';
import { useApiSelector } from '../hooks';
import { RootState } from '../store';

export default function useUserProvider() {
    const userLogin = (state: RootState) => state.userLogin;

    return {
        userLogin: {
            selector: useApiSelector(userLogin),
            postUserSignIn: (data: SignInRequest) => {
                return POST_USER_SIGN_IN(data as any);
            },
        },
    };
}
