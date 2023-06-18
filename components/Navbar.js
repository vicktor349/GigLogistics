import React, { useState } from 'react'
import logo from '../public/image/logo/giglogo.png'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { BiChevronDown } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuEnter = () => {
        setIsMenuOpen(true);
    };
    const handleMenuLeave = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
            <div className='flex ssm:mx-6 ssm:mt-3 md:mx-32 md:mt-5 lg:mx-14 lg:mt-7 items-center'>
                <div className='h-full'>
                    <Link href='/'>
                        <Image src={logo} className='h-12 max-w-min' alt='Gigl Logo' priority={true} />
                    </Link>
                </div>
                <div className='w-full'>
                    <div className='flex justify-end'>
                        <div className='ssm:hidden lg:flex lg:items-center lg:mx-auto'>
                            <div className="relative inline-block text-left">
                                <div
                                    className="group px-4 py-2 text-md font-medium text-gray-800 focus:outline-none focus-visible:ring-2 hover:cursor-pointer"
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <div className='hover:text-primary flex items-center'>
                                        Service Portfolio <BiChevronDown className='inline-block ml-1' />
                                    </div>
                                    {isMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-52 bg-white  divide-gray-100 rounded-md shadow-lg outline-none">
                                            <div className="py-4" role="none">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Domestic Logistics
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Coporarate Logistics
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Overseas Shipping
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    E-commerce Logistics
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-primary"
                                                    role="menuitem"
                                                >
                                                    Wallet and Added Services
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='flex space-x-12'>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='#'>Our Offices</Link>
                                </div>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='#'>Blog</Link>
                                </div>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='#'>FAQs</Link>
                                </div>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='#'>About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className='ssm:hidden lg:flex lg:items-center lg:justify-center'>
                            <Button text='Sign In/Sign Up' />
                        </div>
                        <div className='ssm:flex ssm:items-center ssm:justify-center lg:hidden space-x-2'>
                            <Link href='#' className='ssm:flex ssm:items-center lg:hidden text-primary font-medium '>
                                Sign In/Sign Up
                            </Link>
                            <div className='hover:cursor-pointer text-2xl'>
                                {
                                    isOpen ?
                                        <CgClose onClick={() => setIsOpen(false)} />
                                        :
                                        <RxHamburgerMenu onClick={() => setIsOpen(true)} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='mx-32 flex items-center mt-6 font-medium'>
                    <h1 className=''>Service Portfolio</h1>
                    <div className='float-right'>
                        <BiChevronDown className='float-right' />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar