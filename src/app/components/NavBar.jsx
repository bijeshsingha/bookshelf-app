'use client'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-full right-0 left-0 z-10 bg-white fixed top-0 flex justify-center py-5'>
        <div className=''>
            <ul className='flex gap-10 underline'>
                <li>
                    <Link href={'/'}>
                        Admin
                    </Link>
                </li>
                <li>
                    <Link href={'/show-admin'}>
                        Show admin
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        QR Scanner
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar