import * as React from "react"
import { useSelector } from "react-redux"

// IMPORT STORE STATE
import { IStoreState } from "../../store"

// CONTAINER
export const User: React.SFC = () => {
  
    // Selection: Counter Reducer
    const userSelector = (state: IStoreState) => ({ ...state.user })
    const { name } = useSelector(userSelector)

     return (
        <h2>User: {name}</h2>
    )

}