export interface CounterState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

export interface UserState {
    id: number
    email: string
    accessToken: string
    refreshToken: string
    name: string
    isLogin?: boolean
}
