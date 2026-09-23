import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/child-components', label: 'Child Components' },
        { to: '/react-usestate', label: 'React useState' },
        { to: '/map-filter', label: 'Map/Filter' },
        { to: '/fake-api', label: 'Fake API' },
    ];

    return (
        <nav className='bg-gray-900 p-4 flex justify-center gap-6 flex-wrap sticky top-0 z-50'>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-lg font-bold text-orange-400 border-b-2 border-orange-400 pb-1'
                            : 'text-lg font-bold text-white hover:text-orange-300 pb-1'
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;
