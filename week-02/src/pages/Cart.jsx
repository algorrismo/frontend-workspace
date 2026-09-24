import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { items, dispatch } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/" className="mt-4 inline-block text-gray-500 underline">
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center gap-4 rounded-xl border bg-white p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">
                ${item.price.toFixed(2)} each
              </p>
            </div>
            <div className="flex items-center rounded-lg border border-gray-300">
              <button
                onClick={() =>
                  dispatch({
                    type: 'UPDATE_QTY',
                    payload: { id: item.id, qty: item.qty - 1 },
                  })
                }
                className="px-3 py-1.5 hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.qty}</span>
              <button
                onClick={() =>
                  dispatch({
                    type: 'UPDATE_QTY',
                    payload: { id: item.id, qty: item.qty + 1 },
                  })
                }
                className="px-3 py-1.5 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <p className="w-20 text-right font-semibold">
              ${(item.price * item.qty).toFixed(2)}
            </p>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-xl border bg-white p-4">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Cart
