import { useState } from 'react'
import './App.css'
import CartContext from './contexts/CartContext'
import CartProvider from './contexts/CartContextProvider'
import Cart from './components/Cart'
import AddToCart from './components/AddCart'
function App() {

  return (
    <CartProvider>
      <Cart name="Mobile" price="10000"/>
      <Cart name="Laptop" price="800000"/>
      <Cart name="Pendrive" price="100"/>
      <AddToCart />
    </CartProvider>
  )
}

export default App
