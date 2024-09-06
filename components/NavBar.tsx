import Link from 'next/link'
import React from 'react'


const NavBar:React.FC<any> = () => {
  return (
    <nav className='flex flex-row gap-3 p-4 bg-slate-900 text-white'>
        <Link href='/article'>Articles</Link>
        <Link href='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar