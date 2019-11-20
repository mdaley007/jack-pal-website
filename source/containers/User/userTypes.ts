import { Action } from "redux"

// STATE
export interface IUserState {
    readonly name: string
}

// ACTIONS
export enum userActionTypes {

    USER_UPDATENAME = "USER_UPDATENAME"

}

// ACTION TYPES
export interface IUserUpdateNameAction extends Action {
    type: userActionTypes.USER_UPDATENAME
    payload: string
}