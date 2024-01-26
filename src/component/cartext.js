import React, { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext({
  userName:{
    name:''
  },
  
  setUserName: () => {},
 
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
    const [userName, setUserName] = useState({ name: '' });
   



    const value = {
      userName,
      
      setUserName
    };
  
    useEffect(() => {
      console.log('hai', userName.name);
    }, [userName]);
    

    
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
