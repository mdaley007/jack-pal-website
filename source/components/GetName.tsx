// IMPORT
import * as React from "react"

// DEFINE PROPS
export interface IProps {
    onChange: () => void
}

// COMPONENT
const GetName: React.SFC<IProps> = (props) => {

    return (
        <>
            <h2>Input Name: </h2>
            <input 
                placeholder="Input your name"
                onChange={props.onChange}
            />
        </>
    )
}

// DEFAULTS
GetName.defaultProps = {
    onChange: () => { console.log("getName.defaultProp: onChange") }
}

// EXPORT
export default GetName