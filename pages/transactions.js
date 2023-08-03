import React from 'react'
import Head from 'next/head'
import SideNavbar from '@/components/SideNavbar'

const transactions = () => {
    return (
        <>
            <Head>
                <title>
                    Fund Your wallet to enjoy seamless transaction from start to finish | GIG Logistics
                </title>
            </Head>
            <div className='bg-background flex'>
                <SideNavbar />
                <div className='mt-24 text-center'>
                    <div>
                        <h1 className='text-center'>Fund your wallet to enjoy seamless transactions from start to finish</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default transactions