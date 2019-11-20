import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Store } from "redux"

// IMPORT CONTAINERS
import { Counter } from './containers/Counter'
import { User } from './containers/User'

// CREATE STORE
import configureStore, { IStoreState } from './store'
const store = configureStore()

// DEFINE ROOT ELEMENT
interface IProps { store: Store<IStoreState> }

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <h1>My React and TypeScript App!</h1>
            <Counter />
            <User />
        </Provider>
    )
}

// RENDER ROOT ELEMENT
render(
    <Root store={store} />, 
    document.getElementById("root") as HTMLElement
)