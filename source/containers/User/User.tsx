import * as React from "react"
import { useSelector } from "react-redux"

// IMPORT STYLES
import * as styles from "./User.css"

// IMPORT STORE STATE
import { IStoreState } from "../../store"

// CONTAINER
export const User: React.SFC = () => {
  
    // Selection: Counter Reducer
    const userSelector = (state: IStoreState) => ({ ...state.user })
    const { name } = useSelector(userSelector)

     return (
        <h2 className={styles.userText}>User: {name}</h2>
    )

}