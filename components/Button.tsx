import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  label: string;
  href: string;
}

const Button:React.FC<ButtonProps> = ({label, href}) => {
  return (
    <Link className='inline-block px-5 py-2 mt-2 mb-3 bg-cyan-900 hover:bg-cyan-800 rounded-lg text-xs' href={href}>
      {label}
    </Link>
  )
}

export default Button