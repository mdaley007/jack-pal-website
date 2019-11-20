import { Reducer } from "redux"
import { userActionTypes, IUserState } from "./userTypes"

// INITIALIZE STATE
const initialUserState: IUserState = {
    name: ""
}

// DEFINE REDUCER
 export const userReducer: Reducer<IUserState> = (state=initialUserState, action) => {
    switch (action.type) {
        case userActionTypes.USER_UPDATENAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state
    }
}