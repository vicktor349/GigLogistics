import React, { useState } from 'react'
import Link from 'next/link';
import { MdOutlineLocalShipping } from 'react-icons/md'
import { SlSocialDropbox, SlPlane } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiWallet } from 'react-icons/ci';
import { BsWallet } from 'react-icons/bs';
import { RiWallet3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

const SideNavbar = () => {
    const router = useRouter()
    const activeColor = (p) => router.pathname === p ? "#000" : ""

    return (
        <div className='py-24'>
            <div className='ml-16 mx-auto bg-background drop-shadow-2xl w-64 h-80 rounded-lg'>
                <div className='pt-4'>
                    <div className='flex font-semibold items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <MdOutlineLocalShipping className='text-xl' />
                            <p className='ml-4'>Ship Now</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <SlSocialDropbox className='text-xl' />
                            <p className='ml-4'>Get a Quick Quote</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <TbTruckDelivery className='text-xl' />
                            <p className='ml-4'>Xpress Drop-Off</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <SlPlane className='text-xl' />
                            <p className='ml-4'>Overseas Shipping</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4' style={{ color: activeColor('/transactions') }}>
                        <Link href='/transactions' className='flex items-center'>
                            <CiWallet className='text-xl' />
                            <p className='ml-4'>Transaction</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <BsWallet className='text-xl' />
                            <p className='ml-4'>COD Wallet</p>
                        </Link>
                    </div>
                </div>
                <div className='pt-4 font-semibold'>
                    <div className='flex items-center hover:cursor-pointer w-full ml-4'>
                        <Link href='/' className='flex items-center'>
                            <RiWallet3Line className='text-xl' />
                            <p className='ml-4'>Personal Shopping</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar