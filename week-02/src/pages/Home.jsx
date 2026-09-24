import { useMemo, useState } from 'react'
import { getProducts } from '../api/mockApi'
import useFetch from '../hooks/useFetch'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const { data: products, loading, error } = useFetch(getProducts, [])
  const [query, setQuery] = useState('')

  const visibleProducts = useMemo(() => {
    if (!products) return []
    const q = query.trim().toLowerCase()
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q),
    )
  }, [products, query])

  if (loading) {
    return <p className="py-10 text-center text-gray-500">Loading products…</p>
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or category…"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none sm:w-64"
        />
      </div>

      {visibleProducts.length === 0 ? (
        <p className="text-gray-500">No products match "{query}".</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
