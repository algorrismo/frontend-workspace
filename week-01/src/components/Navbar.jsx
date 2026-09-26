import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold hover:text-blue-400">
                MyWebsite
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-6">

                <Link to="/HomePage.jsx" className="hover:text-blue-400">
                    Home
                </Link>

                <Link to="/use-state" className="hover:text-blue-400">
                    useState
                </Link>

                <Link to="/map" className="hover:text-blue-400">
                    Map
                </Link>

                <Link to="/filter" className="hover:text-blue-400">
                    Filter
                </Link>

                <Link to="/about" className="hover:text-blue-400">
                    About
                </Link>

                <Link to="/contact" className="hover:text-blue-400">
                    Contact
                </Link>


            </div>
        </nav>
    );
};

export default Navbar;
