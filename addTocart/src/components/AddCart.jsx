import React from "react";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";
import { useEffect } from "react";

export default function AddToCart(){
    const {items,setItems} =useContext(CartContext)//here we fetched all the items added into cart
    const [total,setTotal] =useState(0)//initially total price should be zero
    const totalPrice =items.reduce((a,b)=>a +b.price,0);//here its count all the price
    useEffect(()=>{
        const totalPrice = items.reduce((acc, item) => acc + Number(item.price), 0);
        setTotal(totalPrice);
    },[items]);//jab bhi item change hongi to ye toal price ko effect kar dega
    return(
        <div>
            <h1>Items Added into Cart..</h1>
            <ul>
                {items && items.map((itm)=>  <li>{itm.name} :{itm.price} </li>
            )}
            </ul>
            
            <h2>Totol Price:{total}</h2>
        </div>
    )
}