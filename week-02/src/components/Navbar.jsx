import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-200'
  }`

const Navbar = () => {
  const { items } = useCart()
  const count = items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold">
          Shop
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/admin" className={linkClass}>
            Admin
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            {count > 0 && (
              <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                {count}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
