import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto px-2 lg:w-2/5 ' >
        <div className='container flex items-center justify-between mx-auto'>
            <Link href="/" className= 'text-2xl font-medium'>
                トシのブログ
            </Link>
            <div>
                <ul className='flex items-center text-sm py-4'>
                    <li>
                        <Link href="/" className='block px-4 py-2 hover: text-sky-900 transition-all duration-300'>Home</Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/hoge091" className='block px-4 py-2 hover: text-sky-900 transition-all duration-300'>Twitter</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/kunitoshi291" className='block px-4 py-2 hover: text-sky-900 transition-all duration-300'>GitHub</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
