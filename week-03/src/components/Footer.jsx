import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-auto bg-neutral-900 text-neutral-300'>
            <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row'>
                <div className='text-center md:text-left'>
                    <p className='text-lg font-semibold text-white'>My Site</p>
                    <p className='mt-1 text-sm text-neutral-400'>Building things for the web.</p>
                </div>

                <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm'>
                    <Link className='transition hover:text-white' href='/'>Homepage</Link>
                    <Link className='transition hover:text-white' href='/about'>About</Link>
                    <Link className='transition hover:text-white' href='/information'>Information</Link>
                    <Link className='transition hover:text-white' href='/contact'>Contact</Link>
                </nav>
            </div>

            <div className='border-t border-neutral-700 py-4 text-center text-xs text-neutral-500'>
                © {new Date().getFullYear()} My Site. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
