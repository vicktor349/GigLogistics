import Link from 'next/link'
import React from 'react'

const Button = ({ text, link }) => {
    return (
        <Link href={link || '#'} className='bg-primary text-white py-2 px-3 rounded-sm'>
            {text}
        </Link>
    )
}

export default Button