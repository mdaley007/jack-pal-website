import { Action } from "redux"

// DEFINE STATE
export interface ICounterState {
    readonly count: number
}

// ACTIONS
export enum counterActionTypes {

    COUNTER_DECREMENT = "COUNTER_DECREMENT",
    COUNTER_INCREMENT = "COUNTER_INCREMENT"

}

// ACTION TYPES
export interface ICounterDecrementAction extends Action {
    type: counterActionTypes.COUNTER_DECREMENT
}
export interface ICounterIncrementAction extends Action {
    type: counterActionTypes.COUNTER_INCREMENT
}