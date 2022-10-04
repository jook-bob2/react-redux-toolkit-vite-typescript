import { counterSlice, incrementAsync } from '@/core/store/global/slices/counter'
import { useAppDispatch, useAppSelector } from '@/core/store/hooks'
import { AppThunk, RootState } from '@/core/store/store'

export default function useCounterInfo() {
    const selectCount = (state: RootState) => state.counter.value
    const { actions } = counterSlice

    const incrementIfOdd =
        (amount: number): AppThunk =>
        (dispatch, getState) => {
            const currentValue = selectCount(getState())
            if (currentValue % 2 === 1) {
                dispatch(actions.incrementByAmount(amount))
            }
        }

    return {
        count: useAppSelector(selectCount),
        dispatch: useAppDispatch(),
        actions: counterSlice.actions,
        incrementIfOdd,
        incrementAsync,
    }
}
