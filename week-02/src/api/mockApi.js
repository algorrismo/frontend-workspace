const STORAGE_KEY = 'week02-products'

const seedProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 59.99,
    description: 'Over-ear Bluetooth headphones with noise cancellation and 30-hour battery life.',
    category: 'electronics',
    stock: 25,
    thumbnail: 'https://picsum.photos/seed/headphones/400/300',
  },
  {
    id: 2,
    title: 'Running Shoes',
    price: 89.99,
    description: 'Lightweight running shoes with cushioned soles for long-distance comfort.',
    category: 'fashion',
    stock: 40,
    thumbnail: 'https://picsum.photos/seed/shoes/400/300',
  },
  {
    id: 3,
    title: 'Coffee Maker',
    price: 49.5,
    description: '12-cup drip coffee maker with programmable timer and keep-warm plate.',
    category: 'home',
    stock: 15,
    thumbnail: 'https://picsum.photos/seed/coffee/400/300',
  },
  {
    id: 4,
    title: 'Travel Backpack',
    price: 39.99,
    description: 'Water-resistant 30L backpack with laptop compartment and USB charging port.',
    category: 'fashion',
    stock: 32,
    thumbnail: 'https://picsum.photos/seed/backpack/400/300',
  },
  {
    id: 5,
    title: 'Mechanical Keyboard',
    price: 120,
    description: 'Hot-swappable mechanical keyboard with RGB backlight and aluminum frame.',
    category: 'electronics',
    stock: 18,
    thumbnail: 'https://picsum.photos/seed/keyboard/400/300',
  },
  {
    id: 6,
    title: 'Desk Lamp',
    price: 24.99,
    description: 'LED desk lamp with adjustable brightness and three color temperature modes.',
    category: 'home',
    stock: 50,
    thumbnail: 'https://picsum.photos/seed/lamp/400/300',
  },
  {
    id: 7,
    title: 'Water Bottle',
    price: 14.99,
    description: 'Insulated 750ml stainless steel bottle that keeps drinks cold for 24 hours.',
    category: 'sports',
    stock: 60,
    thumbnail: 'https://picsum.photos/seed/bottle/400/300',
  },
  {
    id: 8,
    title: 'Yoga Mat',
    price: 29.99,
    description: 'Non-slip 6mm yoga mat with carrying strap, perfect for home workouts.',
    category: 'sports',
    stock: 35,
    thumbnail: 'https://picsum.photos/seed/yogamat/400/300',
  },
]

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function readProducts() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) return JSON.parse(stored)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts))
  return [...seedProducts]
}

function writeProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export async function getProducts() {
  await wait(500)
  return readProducts()
}

export async function getProduct(id) {
  await wait(400)
  const product = readProducts().find((p) => p.id === Number(id))
  if (!product) throw new Error('Product not found')
  return product
}

export async function createProduct(payload) {
  await wait(500)
  const products = readProducts()
  const product = {
    id: Date.now(),
    title: payload.title.trim(),
    price: Number(payload.price),
    description: payload.description.trim(),
    category: payload.category.trim() || 'general',
    stock: Number(payload.stock) || 0,
    thumbnail:
      payload.thumbnail ||
      `https://picsum.photos/seed/${Date.now()}/400/300`,
  }
  writeProducts([product, ...products])
  return product
}

export async function updateProduct(id, payload) {
  await wait(500)
  const products = readProducts()
  const index = products.findIndex((p) => p.id === Number(id))
  if (index === -1) throw new Error('Product not found')
  products[index] = {
    ...products[index],
    title: payload.title.trim(),
    price: Number(payload.price),
    description: payload.description.trim(),
    category: payload.category.trim() || 'general',
    stock: Number(payload.stock) || 0,
    thumbnail: payload.thumbnail || products[index].thumbnail,
  }
  writeProducts(products)
  return products[index]
}

export async function deleteProduct(id) {
  await wait(400)
  writeProducts(readProducts().filter((p) => p.id !== Number(id)))
}
