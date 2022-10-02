import { CounterState, UserState } from './type'

export const initialCounterState: CounterState = {
    value: 0,
    status: 'idle',
}

export const initialUserState: UserState = {
    id: 0,
    email: '',
    accessToken: '',
    refreshToken: '',
    name: '',
    isLogin: false,
}
