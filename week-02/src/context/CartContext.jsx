import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const initialCart = { items: [] }

function cartReducer(cart, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { qty = 1, ...product } = action.payload
      const existing = cart.items.find((item) => item.id === product.id)
      if (existing) {
        return {
          items: cart.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + qty } : item,
          ),
        }
      }
      return { items: [...cart.items, { ...product, qty }] }
    }
    case 'REMOVE_ITEM':
      return { items: cart.items.filter((item) => item.id !== action.payload) }
    case 'UPDATE_QTY':
      return {
        items: cart.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: action.payload.qty }
              : item,
          )
          .filter((item) => item.qty > 0),
      }
    default:
      return cart
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  return (
    <CartContext.Provider value={{ items: cart.items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
