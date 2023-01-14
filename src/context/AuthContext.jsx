import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider ({children}) {
    const [cartQuantity,setCartQuantity] = useState(0);
    const [cartData,setCartData] = useState([]);
    

    function cartAdd () {
        setCartQuantity(prev => prev+1 )
    }
    function cartdelete () {
        if (cartQuantity===0) {
            return
        }
        else {
            setCartQuantity(prev => prev-1 )
        }
    }
 
    return (
        <AuthContext.Provider 
        value={{
            cartData,setCartData,
            cartQuantity,setCartQuantity,
            cartAdd,
            cartdelete
        }} 
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
