import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../api/mockApi'
import useFetch from '../hooks/useFetch'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(() => getProduct(id), [id])
  const { dispatch } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (loading) {
    return <p className="py-10 text-center text-gray-500">Loading…</p>
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>
  }

  if (!product) return null

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        qty,
      },
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div>
      <Link to="/" className="text-sm text-gray-500 hover:underline">
        ← Back to products
      </Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl object-cover"
        />
        <div>
          <span className="text-xs uppercase tracking-wide text-gray-400">
            {product.category}
          </span>
          <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="mt-1 text-sm text-gray-500">{product.stock} in stock</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-gray-300">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-10 text-center">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="rounded-lg bg-gray-900 px-6 py-2.5 text-white hover:bg-gray-700"
            >
              {added ? 'Added ✓' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
