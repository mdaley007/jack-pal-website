import { ActionCreator } from "redux"
import { counterActionTypes, 
         ICounterDecrementAction, 
         ICounterIncrementAction } from "./counterTypes"

// ACTIONS
export const counterDecrement: ActionCreator<ICounterDecrementAction> = () => ({
    type: counterActionTypes.COUNTER_DECREMENT
})

export const counterIncrement: ActionCreator<ICounterIncrementAction> = () => ({
    type: counterActionTypes.COUNTER_INCREMENT
})