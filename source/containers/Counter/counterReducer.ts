import { Reducer } from "redux"
import { counterActionTypes, ICounterState } from "./counterTypes"

// INITIALIZE STATE
const initialCounterState: ICounterState = {
    count: 0
}

// DEFINE REDUCER
 export const counterReducer: Reducer<ICounterState> = (state=initialCounterState, action) => {
    switch (action.type) {
        case counterActionTypes.COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case counterActionTypes.COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}