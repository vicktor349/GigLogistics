import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Input, PasswordInput } from '@mantine/core'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { IoAtSharp } from 'react-icons/io5'
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from 'axios'

const signup = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: ""

    })
    const [passMatch, setPassMatch] = useState(true)
    useEffect(() => {
        validatePassword()
    }, [state])

    const validatePassword = () => {
        state.password === state.cPassword
            ? setPassMatch(true)
            : setPassMatch(false)
    }
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
        console.log(state.firstName, state.lastName, state.email, state.password, state.cPassword)
        try {
            await axios({
                method: 'POST',
                url: 'http://localhost:3001/api/auth/signup',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            })
        } catch (err) {
            console.log(err)
        }
    }
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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='grid grid-cols-2 gap-8'>
                                <Input icon={<CgProfile size='24' />} value={state.firstName} id='firstName' onChange={handleChange} placeholder='First Name' className='mb-8' size='lg' required />
                                <Input icon={<CgProfile size='24' />} value={state.lastName} id='lastName' onChange={handleChange} placeholder='Last Name' className='mb-8' size='lg' required />
                            </div>
                            <Input icon={<IoAtSharp size='24' />} type='email' value={state.email} id='email' onChange={handleChange} size='lg' className='mb-8' placeholder='Email Address' required />
                            {
                                passMatch
                                    ? <PasswordInput icon={<RiLockPasswordLine size='24' />} value={state.password} id='password' onChange={handleChange} size='lg' className='mb-8' placeholder='Password' required />
                                    : <PasswordInput error="Passwords don't match" icon={<RiLockPasswordLine size='24' />} value={state.password} id='password' onChange={handleChange} size='lg' className='mb-8' placeholder='Password' required />

                            }
                            {
                                passMatch
                                    ? <PasswordInput icon={<RiLockPasswordLine size='24' />} value={state.cPassword} id='cPassword' onChange={handleChange} size='lg' className='mb-8' placeholder='Confirm Password' required />
                                    : <PasswordInput error="Passwords don't match" icon={<RiLockPasswordLine size='24' />} value={state.cPassword} id='cPassword' onChange={handleChange} size='lg' className='mb-8' placeholder='Confirm Password' required />
                            }
                            {
                                !passMatch
                                    ? <div className='mb-8 text-[#666] text-center bg-[#ccc] font-bold w-full p-4 rounded-xl hover:cursor-not-allowed'>
                                        Sign Up
                                    </div>
                                    : <button type='submit' className='mb-8 text-white bg-black font-bold w-full p-4 rounded-xl'>
                                        Sign Up
                                    </button>
                            }
                            <p className='text-center text-text'>Already have an account? <Link href='/signin' className='underline hover:cursor-pointer'>Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup