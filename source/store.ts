import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import logger from "redux-logger"

// IMPORT REDUCER AND REDUCER TYPES
import { counterReducer } from "./containers/Counter/counterReducer"
import { ICounterState } from "./containers/Counter/counterTypes"

import { userReducer } from "./containers/User/userReducer"
import { IUserState } from "./containers/User/userTypes"

// DEFINE STORE STATE
export interface IStoreState {
    counter: ICounterState,
    user: IUserState
}

// ROOT REDUCER
const rootReducer = combineReducers<IStoreState>({
    counter: counterReducer,
    user: userReducer
})

// MIDDLEWARE
const middleWareList = [logger]
const middleWare = applyMiddleware(...middleWareList)

// EXPORT CREATE STORE FUNCTION
export default function configureStore(): Store<IStoreState> {
    const store = createStore(rootReducer, undefined, middleWare)
    return store
}