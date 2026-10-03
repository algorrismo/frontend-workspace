import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../api/mockApi'

const emptyForm = {
  title: '',
  price: '',
  description: '',
  category: '',
  stock: '',
  thumbnail: '',
}

const fieldClass =
  'w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none'

const Admin = () => {
  const [refreshKey, setRefreshKey] = useState(0)
  const { data: products, loading, error } = useFetch(getProducts, [refreshKey])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const startEdit = (product) => {
    setEditingId(product.id)
    setForm({
      title: product.title,
      price: String(product.price),
      description: product.description,
      category: product.category,
      stock: String(product.stock),
      thumbnail: product.thumbnail,
    })
    setFormError('')
  }

  const resetForm = () => {
    setEditingId(null)
    setForm(emptyForm)
    setFormError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.price) {
      setFormError('Title and price are required')
      return
    }
    setSaving(true)
    setFormError('')
    try {
      if (editingId) {
        await updateProduct(editingId, form)
      } else {
        await createProduct(form)
      }
      resetForm()
      setRefreshKey((k) => k + 1)
    } catch (err) {
      setFormError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return
    await deleteProduct(id)
    if (editingId === id) resetForm()
    setRefreshKey((k) => k + 1)
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Admin — Product CRUD</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          className="h-fit rounded-xl border bg-white p-5 lg:col-span-1"
        >
          <h2 className="mb-4 font-semibold">
            {editingId ? 'Edit product' : 'Create product'}
          </h2>
          <div className="space-y-3">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title *"
              className={fieldClass}
            />
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price *"
              type="number"
              step="0.01"
              min="0"
              className={fieldClass}
            />
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className={fieldClass}
            />
            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock"
              type="number"
              min="0"
              className={fieldClass}
            />
            <input
              name="thumbnail"
              value={form.thumbnail}
              onChange={handleChange}
              placeholder="Image URL (optional)"
              className={fieldClass}
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows={3}
              className={fieldClass}
            />
          </div>

          {formError && <p className="mt-3 text-sm text-red-500">{formError}</p>}

          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              {saving ? 'Saving…' : editingId ? 'Save changes' : 'Create'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="lg:col-span-2">
          {loading && (
            <p className="py-10 text-center text-gray-500">Loading…</p>
          )}
          {error && <p className="py-10 text-center text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="space-y-3">
              {(products || []).map((product) => (
                <div
                  key={product.id}
                  className="flex flex-wrap items-center gap-4 rounded-xl border bg-white p-4"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-500">
                      {product.category} · ${product.price.toFixed(2)} ·{' '}
                      {product.stock} in stock
                    </p>
                  </div>
                  <button
                    onClick={() => startEdit(product)}
                    className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="rounded-lg border border-red-300 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin
