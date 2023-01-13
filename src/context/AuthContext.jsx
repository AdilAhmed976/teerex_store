import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider ({children}) {
    const [cartItems,setCartItems] = useState(0);

    function cartAdd () {
        setCartItems(prev => prev+1 )
    }
    function cartdelete () {
        setCartItems(prev => prev-1 )
    }
 
    return (
        <AuthContext.Provider value={{cartItems,cartAdd,cartdelete}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
