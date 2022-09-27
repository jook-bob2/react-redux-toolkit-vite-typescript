export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

export const initialCounterState: CounterState = {
    value: 0,
    status: 'idle',
};

export interface UserState {
    id: number;
    email: string;
    token: string;
    name: string;
    isLogin?: boolean;
}

export const initialUserState: UserState = {
    id: 0,
    email: '',
    token: '',
    name: '',
    isLogin: false,
};
