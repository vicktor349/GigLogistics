import Head from 'next/head'
import React from 'react'
import { Input, PasswordInput } from '@mantine/core'
import Link from 'next/link'


const signup = () => {
    return (
        <>
            <Head>
                <title>Sign UP | GIG Logistics</title>
            </Head>
            <div className='bg-background'>
                <div className='pt-12 pb-20 ssm:pb-36 mx-auto ssm:w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12'>
                    <div className='text-center'>
                        <h1 className='text-text text-2xl font-bold mb-10 text-center'>Sign up with us as an</h1>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-8'>
                            <Input placeholder='First Name' className='mb-8' size='lg' />
                            <Input placeholder='Last Name' className='mb-8' size='lg' />
                        </div>
                        <Input type='email' size='lg' className='mb-8' placeholder='Email Address' />
                        <PasswordInput size='lg' className='mb-8' placeholder='Password' />
                        <PasswordInput size='lg' className='mb-8' placeholder='Confirm Password' />
                        <button className='mb-8 text-white bg-black font-bold w-full p-4 rounded-xl'>
                            Sign Up
                        </button>
                        <p className='text-center text-text'>Already have an account? <Link href='/signin' className='underline hover:cursor-pointer'>Log In</Link></p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default signup