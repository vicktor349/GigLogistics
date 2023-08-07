import React from 'react'
import Head from 'next/head'
import SideNavbar from '@/components/SideNavbar'
import Image from 'next/image'
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import Tab from '@/components/Tab';
import withAuth from '@/components/useAuthentication';





const transactions = () => {
    const [value, setValue] = useState([null, null]);
    return (
        <>
            <Head>
                <title>
                    Fund Your wallet to enjoy seamless transaction from start to finish | GIG Logistics
                </title>
            </Head>
            <div className='bg-background grid grid-cols-9'>
                <SideNavbar />
                <div className='mt-24 col-start-2 col-end-10'>
                    <div className='grid place-items-center'>
                        <h1 className='text-center text-3xl font-semibold'>Fund your wallet to enjoy seamless transactions from <br /> start to finish</h1>
                    </div>
                    <div className='grid place-items-center'>
                        <Image src='https://giglogistics.com/static/media/cardbg.701e3783.svg' className='bg-black ml-28 mt-12 rounded-3xl select-none' width='600' height='288' alt='balance dashboard' />
                        <div className='absolute -ml-60'>
                            <h1 className='text-white text-2xl'>Available balance</h1>
                            <h1 className='text-white text-7xl font-bold'>0</h1>
                            <button className='bg-white text-black rounded-3xl py-3 px-4 mt-4'>
                                Fund Wallet
                            </button>
                        </div>
                    </div>
                    <div>
                        <DatePickerInput
                            className='bg-white my-20'
                            type="range"
                            size='md'
                            radius='md'
                            placeholder="Pick dates range"
                            value={value}
                            onChange={setValue}
                            mx="auto"
                            maw={400}
                        />
                    </div>
                    <div>
                        <Tab />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withAuth(transactions)