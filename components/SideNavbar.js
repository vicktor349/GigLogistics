import React, { useState } from 'react'
import Link from 'next/link';
import { MdOutlineLocalShipping } from 'react-icons/md'
import { SlSocialDropbox, SlPlane } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiWallet } from 'react-icons/ci';
import { BsWallet } from 'react-icons/bs';
import { RiWallet3Line } from 'react-icons/ri';

const SideNavbar = () => {

    return (
        <div className='py-24'>
            <div className='ml-16 mx-auto bg-background drop-shadow-2xl w-64 h-80 rounded-lg'>
                <div className='pt-4'>
                    <div className='flex font-semibold items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <MdOutlineLocalShipping className='text-xl' />
                        </Link>
                        <p className='ml-4'>Ship Now</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <SlSocialDropbox className='text-xl' />
                        </Link>
                        <p className='ml-4'>Get a Quick Quote</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <TbTruckDelivery className='text-xl' />
                        </Link>
                        <p className='ml-4'>Xpress Drop-Off</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <SlPlane className='text-xl' />
                        </Link>
                        <p className='ml-4'>Overseas Shipping</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <CiWallet className='text-xl' />
                        </Link>
                        <p className='ml-4'>Transaction</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <BsWallet className='text-xl' />
                        </Link>
                        <p className='ml-4'>COD Wallet</p>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/'>
                            <RiWallet3Line className='text-xl' />
                        </Link>
                        <p className='ml-4'>Personal Shopping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar