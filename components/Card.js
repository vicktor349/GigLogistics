import Link from 'next/link'
import React from 'react'

const Card = ({ href, text, icon, info }) => {
    return (
        <Link href={href} className='ssm:text-center bg-white py-12 px-8 border-gray-300 border-[1px] border-solid hover:cursor-pointer hover:bg-black hover:text-white'>
            <div className='text-6xl font-light flex justify-center'>{icon}</div>
            <div className='hover:text-white'>
                <p className='py-5 text-gray-600 font-semibold text-xl'>
                    {text}
                </p>
                <p className='text-gray-500'>
                    {info}
                </p>
            </div>
        </Link>
    )
}

export default Card