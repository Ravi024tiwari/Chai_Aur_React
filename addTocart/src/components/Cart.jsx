import React from "react";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

function Cart(props){
    const {items,setItems} =useContext(CartContext)
    const AddToCart =()=>{
        setItems([...items,{name:props.name,price:props.price}])//set in items after destruction the value
    }
    return(
<div style={{margin:"5px",padding:"5px", backgroundColor:"blue",color:"white"}}>
    <h2>Product name:{props.name}</h2>
    <h3>Product Price:${props.price}</h3>

    <button onClick={AddToCart}>Add To cart..</button>
</div>
    )
}
export default Cart;