import React from "react"
import AppContext from "./AppContext"

const AppState = (props) => {

    //w'll be using this in different components just import it and use/update instead of props drilling 
    const [ image, setImage ] = React.useState('');
    
    return (
        <AppContext.Provider value={{image, setImage}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;