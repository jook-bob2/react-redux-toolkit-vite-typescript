import { counterReducer } from '../slices/counter'
import { userReducer } from '../slices/user'

export const globalReducers = {
    counter: counterReducer,
    userInfo: userReducer,
}
