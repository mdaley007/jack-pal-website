// IMPORT
import * as React from "react"

// IMPORT STYLES
import * as defaultStyle from "./GetName.css"

// DEFINE PROPS
export interface IProps {
    onChange: () => void
    style?: string;
}

// COMPONENT
const GetName: React.SFC<IProps> = (props) => {

    const getNameText = props.style ? props.style : defaultStyle.getNameText

    return (
        <>
            <h2 className={getNameText}>Input Name: </h2>
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