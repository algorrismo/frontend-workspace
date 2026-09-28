import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-center items-center space-x-4 bg-olive-700 text-white p-4'>
                <Link className='' href={"/"}>Homepage</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/information"}>Information</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;