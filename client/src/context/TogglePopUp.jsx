import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggglePopUp = ({children}) => {
    const [openPopUp, setOpenPopUp] = useState(false)


    const contextValue = {
        openPopUp,
        setOpenPopUp
    }

    return(
       <ToggleContext.Provider value={contextValue}>
           {children} 
       </ToggleContext.Provider> 
    )
}

export default ToggglePopUp;