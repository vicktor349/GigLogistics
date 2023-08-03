import React, { useState } from 'react'
import { Input, PasswordInput } from '@mantine/core';
import { IoAtSharp } from 'react-icons/io5'
import { RiLockPasswordLine } from 'react-icons/ri'
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const signin = () => {
    const router = useRouter()
    const [state, setState] = useState({
        email: "",
        password: "",
    })
    const [errMsg, setErrMsg] = useState('')
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const details = { ...state }
        try {
            await axios({
                method: 'POST',
                url: 'http://localhost:3001/api/auth/signin',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                const token = response.data.token
                Cookies.set('jwtToken', token, { expires: 7, secure: true, sameSite: 'strict' });
                if (response.status && token) {
                    router.push('/')
                }
                window.location.reload()
            })
        } catch (err) {
            console.log(err)
        }
        setState({ email: '', password: '' })
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className='mx-auto'>
                                <Input
                                    className='mb-10'
                                    icon={<IoAtSharp size='24' />}
                                    placeholder="Your email"
                                    size="lg"
                                    type='email'
                                    value={state.email}
                                    id='email'
                                    onChange={handleChange}
                                    required
                                />
                                <PasswordInput
                                    className='mb-3'
                                    placeholder="Password"
                                    value={state.password}
                                    id='password'
                                    onChange={handleChange}
                                    icon={<RiLockPasswordLine size='24' />}
                                    size='lg'
                                    required
                                />
                                <div className='text-red-700 mb-7 text-center'>
                                    {errMsg}
                                </div>
                                <p className='underline hover:cursor-pointer mb-5'>Forgot Password?</p>
                                <button className='mb-5 text-white bg-black font-bold w-full p-4 rounded-xl'>
                                    Login
                                </button>
                                <p className='mb-5 text-center text-text'>Don&apos;t have an account? <Link href='/signup' className='underline hover:cursor-pointer'>Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signin