import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import appScreen from '../public/image/app-screen.png'
import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const DownloadApp = () => {
    return (
        <div className='bg-black text-white py-28'>
            <div className='ssm:grid ssm:place-items-center ssm:mx-4 sm:mr-20 md:mx-32 lg:mr-6 md:flex items-center justify-end'>
                <div className='ssm:relative ssm:mb-12 sm:mb-12 md:absolute sm:left-1 md:left-36 lg:left-16'>
                    <h1 className='ssm:text-center md:text-xl md:w-2/3 lg:text-4xl font-bold mb-5 max-w-md leading-10'>
                        GIGGo, the app for local and international shipping
                    </h1>
                    <div className='flex'>
                        <Link href='#' className='pr-6'>
                            <div className='bg-primary text-white ssm:py-0 ssm:px-5 sm:py-2 sm:px-5 rounded-md flex h-full items-center'>
                                <BsApple className='ssm:text-2xl ssm:mr-2 sm:mr-4 sm:text-3xl' />
                                <div>
                                    <p className='text-sm font-semibold'>Download on the</p>
                                    <h1 className='font-bold text-xl'>App Store</h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='#'>
                            <div className='bg-background flex items-center ssm:px-4 py-2 sm:px-6 rounded-md h-full '>
                                <IoLogoGooglePlaystore className='text-black ssm:text-xl sm:text-3xl ssm:mr-2 sm:mr-4' />
                                <div>
                                    <p className='text-secondary font-semibold'>Get it on</p>
                                    <h1 className='text-black text-xl font-bold'>Google Play</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='md:hidden lg:inline-block'>
                    <Image src={appScreen} alt='Image of gigl mobile app' className='md:h-72 md:max-w-min lg:h-full lg:w-full' priority={true} />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp