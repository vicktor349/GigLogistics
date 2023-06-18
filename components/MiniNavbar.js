import React from 'react'
import shipping from '../public/image/logo/overseas-shipping.png'
import Image from 'next/image'
import Button from './Button'

const MiniNavbar = () => {
    return (
        <div className='ssm:hidden xl:flex bg-black text-white'>
            <div className='flex items-center p-3 mx-64'>
                <Image src={shipping} alt='Overseas Shipping Logo' className='h-12 max-w-min' />
                <div className='px-6'>
                    <p>GIGL China is LIVE!! Shop, Ship & Make ALL Payments in Naira</p>
                </div>
                <Button text='Learn More' />
            </div>
        </div>
    )
}

export default MiniNavbar