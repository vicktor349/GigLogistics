import React, { useEffect, useState } from 'react'
import logo from '../public/image/logo/giglogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronDown, BiEdit, BiLogOut } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CgClose } from 'react-icons/cg'
import { Menu, Button, rem, Avatar } from '@mantine/core';
import Cookies from 'js-cookie'
import { BsBell, BsWallet } from 'react-icons/bs'
import { IoArrowDownSharp } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { MdLockReset } from 'react-icons/md'



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [token, setToken] = useState('')
    const closeMobileMenu = () => {
        setIsOpen(false)
        setIsMenuOpen(false)
    }
    const handleMenuEnter = () => setIsMenuOpen(true);
    const handleMenuLeave = () => setIsMenuOpen(false);
    useEffect(() => {
        const cookieToken = Cookies.get('jwtToken')


        if (cookieToken) {
            setToken(cookieToken)
        }

    }, [])

    return (
        <div className='sticky top-0 z-50 bg-[rgba(255,255,255,1)] ssm:mt-3 pt-5 pb-8 shadow-lg'>
            <div className='flex ssm:mx-6 md:mx-32 lg:mx-14 items-center'>
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
                                            <div>
                                                <Link
                                                    href="/domesticlogistics"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Domestic Logistics
                                                </Link>
                                                <Link
                                                    href="corporatelogistics"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Coporarate Logistics
                                                </Link>
                                                <Link
                                                    href="/overseashipping"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    Overseas Shipping
                                                </Link>
                                                <Link
                                                    href="/ecommercelogistics"
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[rgba(213,52,58)]"
                                                    role="menuitem"
                                                >
                                                    E-commerce Logistics
                                                </Link>
                                                <Link
                                                    href="/walletservices"
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
                                    <Link href='/offices'>Our Offices</Link>
                                </div>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='/faqs'>FAQs</Link>
                                </div>
                                <div className='hover:text-primary font-medium'>
                                    <Link href='/aboutus'>About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                token ?
                                    <div className='ssm:hidden lg:flex lg:items-center lg:justify-center hover:cursor-pointer select-none'>
                                        <div className=' mr-10 hover:bg-gray-50 p-3 rounded'>
                                            <svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-2xl text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                                        </div>
                                        <Menu shadow="md" width={215} trigger='hover'>
                                            <Menu.Target>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center hover:bg-gray-50 py-1 px-3 text-gray rounded'>
                                                        <h1 className='font-semibold px-2 text-gray-800'>Segun Layomi</h1>
                                                        <Avatar radius='xl' alt='Avatar' />
                                                        <IoArrowDownSharp className='ml-4' />
                                                    </div>
                                                </div>
                                            </Menu.Target>
                                            <Menu.Dropdown className='font-semibold'>
                                                <Menu.Item icon={<FiUser size={18} />}>My Profile</Menu.Item>
                                                <Menu.Item icon={<BsWallet size={18} />}>My Transaction</Menu.Item>
                                                <Menu.Item icon={<BiEdit size={18} />}>Change Wallet Pin</Menu.Item>
                                                <Menu.Item icon={<MdLockReset size={18} />}>Reset Wallet Pin</Menu.Item>
                                                <Menu.Item icon={<BiLogOut size={18} />}>Logout</Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                    </div>
                                    :
                                    <div className='ssm:hidden lg:flex lg:items-center lg:justify-center'>
                                        <Link href='/signin' className='w-auto rounded-sm mb-0 whitespace-nowrap overflow-hidden overflow-ellipsis bg-transparent font-medium lg:font-normal lg:bg-primary border-primary border-none sm:border text-sm text-primary lg:text-white p-3 flex justify-center'>
                                            Sign In/Sign Up
                                        </Link>
                                    </div>
                            }
                        </div>
                        <div className='ssm:flex ssm:items-center ssm:justify-center lg:hidden space-x-2'>
                            <Link href='/signin' className='ssm:flex ssm:items-center lg:hidden text-primary font-medium '>
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
                <div className='absolute bg-[rgba(255,255,255,1)] w-full lg:hidden'>
                    <div
                        onMouseEnter={handleMenuEnter}
                        onMouseLeave={handleMenuLeave}
                    >
                        <div className='ssm:mx-10 md:mx-32 flex items-center relative mt-4 font-medium text-secondary hover:text-primary hover:cursor-pointer'>
                            <h1>Service Portfolio</h1>
                            <div className='absolute right-0'>
                                <BiChevronDown className='float-right' />
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="ssm:mx-10 md:mx-32 mt-4 bg-color font-medium text-secondary">
                                <Link
                                    href="/domesticlogistics"
                                    className="block px-4 py-4 text-sm hover:text-primary "
                                    role="menuitem"
                                    onClick={closeMobileMenu}
                                >
                                    Domestic Logistics
                                </Link>
                                <Link
                                    href="/corporatelogistics"
                                    className="block px-4 py-4 text-sm hover:text-primary"
                                    role="menuitem"
                                    onClick={closeMobileMenu}
                                >
                                    Coporate Logistics
                                </Link>
                                <Link
                                    href="/overseashipping"
                                    className="block px-4 py-4 text-sm hover:text-primary"
                                    role="menuitem"
                                    onClick={closeMobileMenu}
                                >
                                    Overseas Shipping
                                </Link>
                                <Link
                                    href="/ecommercelogistics"
                                    className="block px-4 py-4 text-sm hover:text-primary"
                                    role="menuitem"
                                    onClick={closeMobileMenu}
                                >
                                    Ecommerce Logistics
                                </Link>
                                <Link
                                    href="/walletservices"
                                    className="block px-4 py-4 text-sm hover:text-primary"
                                    role="menuitem"
                                    onClick={closeMobileMenu}
                                >
                                    Wallet and Added Services
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className='ssm:mx-10 md:mx-32 mt-4 text-secondary'>
                        <div className='hover:text-primary hover:cursor-pointer py-4 font-medium' onClick={closeMobileMenu}>
                            <Link href='/offices' className='my-20'>
                                Our Offices
                            </Link>
                        </div>

                        <div className='hover:text-primary hover:cursor-pointer py-4 font-medium' onClick={closeMobileMenu}>
                            <Link href='/faqs'>
                                FAQs
                            </Link>
                        </div>
                        <div className='hover:text-primary hover:cursor-pointer py-4 font-medium' onClick={closeMobileMenu}>
                            <Link href='/aboutus'>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Navbar