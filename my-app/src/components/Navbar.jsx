import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex  justify-center items-center p-4 bg-gray-800 text-white'>

            <navbar className='flex justify-center items-center space-x-4'>
                <Link href='/students' className='hover:text-gray-400'>Students</Link>
                <Link href='/bloglist' className='hover:text-gray-400'>Blogs</Link>
                <Link href='/blog' className='hover:text-gray-400'>Blog</Link>
                <Link href='/contact' className='hover:text-gray-400'>Contact</Link>
                <Link href='/about' className='hover:text-gray-400'>About</Link>
            </navbar>
            
        </div>
    );
};

export default Navbar;