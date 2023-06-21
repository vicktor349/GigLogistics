import React from 'react'
import { Input, PasswordInput } from '@mantine/core';
import { IoAtSharp } from 'react-icons/io5'
import { RiLockPasswordLine } from 'react-icons/ri'
import Head from 'next/head';
import Link from 'next/link';

const signin = () => {
    return (
        <>
            <Head>
                <title>Sign In | GIG Logistics</title>
            </Head>
            <div className='bg-background'>
                <div className='flex'>
                    <div className='pt-12 pb-20 ssm:pb-36 mx-auto ssm:w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12' >
                        <div className='text-text text-2xl font-bold mb-10 text-center'>
                            Sign In
                        </div>
                        <div className='mx-auto'>
                            <Input
                                className='mb-10'
                                icon={<IoAtSharp size='24' />}
                                placeholder="Your email"
                                size="lg"
                                type='email'
                                required
                            />
                            <PasswordInput
                                className='mb-10'
                                placeholder="Password"
                                icon={<RiLockPasswordLine size='24' />}
                                size='lg'
                                required
                            />
                            <p className='underline hover:cursor-pointer mb-5'>Forgot Password?</p>
                            <button className='mb-5 text-white bg-black font-bold w-full p-4 rounded-xl'>
                                Login
                            </button>
                            <p className='mb-5 text-center text-text'>Don&apos;t have an account? <Link href='/signup' className='underline hover:cursor-pointer'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signin