const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
            
            {/* Logo */}
            <h1 className="text-2xl font-bold">
                MyWebsite
            </h1>

            {/* Navigation Links */}
            <div className="flex gap-6">
                <a href="/" className="hover:text-blue-400">
                    Home
                </a>

                <a href="/products" className="hover:text-blue-400">
                    Products
                </a>

                <a href="/about" className="hover:text-blue-400">
                    About
                </a>

                <a href="/contact" className="hover:text-blue-400">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;