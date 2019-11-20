import { ActionCreator } from "redux"
import { userActionTypes, 
         IUserUpdateNameAction } from "./userTypes"

// ACTIONS
export const userUpdateName: ActionCreator<IUserUpdateNameAction> = (event: any) => ({
    type: userActionTypes.USER_UPDATENAME,
    payload: event.target.value
})