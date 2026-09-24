import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        qty: 1,
      },
    })
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs uppercase tracking-wide text-gray-400">
          {product.category}
        </span>
        <Link
          to={`/products/${product.id}`}
          className="font-semibold hover:underline"
        >
          {product.title}
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={addToCart}
            className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-gray-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
