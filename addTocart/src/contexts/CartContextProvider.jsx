import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";
function CartProvider({children}){
    const [items,setItems] =useState([]);//initially no items in the cart
    return(
        <CartContext.Provider value={{items,setItems}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;