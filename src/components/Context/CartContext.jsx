import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export default function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const initialCartData = []
    setCart(initialCartData)
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}