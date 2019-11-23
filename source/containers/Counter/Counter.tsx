import * as React from "react"
import { useDispatch, useSelector } from "react-redux"

// IMPORT STYLES
import * as styles from "./Counter.css"

// IMPORT STORE STATE
import { IStoreState } from "../../store"

// IMPORT ACTIONS
import { counterDecrement, counterIncrement } from "./counterActions"
import { userUpdateName } from "../User/userActions"

// IMPORT COMPONENTS
import GetName from "../../components/GetName/GetName"

// CONTAINER
export const Counter: React.SFC = () => {
  
    // Selection: Counter Reducer
    // const { count } = useSelector(state => ({ ...state.counterReducer }))  <-- Why not work?
    const counterSelector = (state: IStoreState) => ({ ...state.counter })
    const { count } = useSelector(counterSelector)

    // Dispatch
    const dispatch = useDispatch();
    const handleCounterDecrement = () => dispatch(counterDecrement())
    const handleCounterIncrement = () => dispatch(counterIncrement())
    const handleUserUpdateName = () => dispatch(userUpdateName(event))

    return (
        <div>

            <h2 className={styles.counterText}>Counter: {count}</h2>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterDecrement}>-</button>

            <GetName 
                onChange={handleUserUpdateName} 
                style={styles.counterText}
            />
            
        </div>
    )

}