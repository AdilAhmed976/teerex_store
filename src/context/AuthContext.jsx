import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider ({children}) {
    const [cartItems,setCartItems] = useState(0);


    return (
        <AuthContext.Provider value={{cartItems}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
