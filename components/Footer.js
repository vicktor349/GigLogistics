import React from 'react'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsLink } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='bg-[#19191b] bg-[url("../public/image/footer-bg.png")] bg-no-repeat text-white py-10'>
            <div className='ssm:mx-8 sm:mx-8 md:mx-36 lg:mx-20 lg:grid lg:grid-cols-4'>
                <div>
                    <h1 className='font-bold text-xl'>© 2023 GIG Logistics</h1>
                </div>
                <div className='grid ssm:mt-8 sm:mt-4 md:mt-6 space-y-6'>
                    <h1 className='text-xl font-bold ssm:mb-0 sm:mb-5'>Company</h1>
                    <Link href='#'>Service Portfolio</Link>
                    <Link href='#'>About us</Link>
                    <Link href='#'>Blog</Link>
                    <Link href='#'>Terms and Conditions</Link>
                </div>
                <div className='ssm:mt-8 sm:mt-4 md:mt-6 grid space-y-6'>
                    <h1 className='text-xl font-bold ssm:mb-0 sm:mb-5'>Other Services</h1>
                    <Link href='#'>Get a Quote</Link>
                    <Link href='#'>Schedule a Pickup</Link>
                    <Link href='#'>GIG Alpha</Link>
                    <Link href='#'>Overseas Shipping</Link>
                    <Link href='#'>Report Issues</Link>
                </div>
                <div>
                    <h1 className='ssm:mt-8 sm:mt-4 md:mt-6 text-xl font-bold mb-5'>Connect with us</h1>
                    <div className='grid grid-cols-4 w-[150px]'>
                        <BsFacebook className='hover:cursor-pointer' />
                        <BsInstagram className='hover:cursor-pointer' />
                        <BsTwitter className='hover:cursor-pointer' />
                        <BsLinkedin className='hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer