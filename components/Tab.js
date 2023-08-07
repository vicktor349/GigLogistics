import React from 'react'
import { Autocomplete, Tabs } from '@mantine/core';
import { FaCaretDown } from 'react-icons/fa';




const Tab = () => {
    return (
        <Tabs color="dark" defaultValue="first" className='ml-20 text-text'>
            <div className='grid place-items-center'>
                <Tabs.List grow className='w-9/12'>
                    <Tabs.Tab value="first" className='font-bold text-lg'>WALLET</Tabs.Tab>
                    <Tabs.Tab value="second" color="dark" className='font-bold text-lg'>
                        SHIPMENT
                    </Tabs.Tab>
                    <Tabs.Tab value='third' color='dark' className='font-bold text-lg'>
                        INTERNATIONAL SHIPMENT
                    </Tabs.Tab>
                </Tabs.List>

            </div>
            <Tabs.Panel value="first" pt="xs">
                <p className='text-center text-xl font-semibold'>Transaction history</p>
                <div>
                    <div className='flex mx-36 font-semibold'>
                        <p className='mr-auto'>Details</p>
                        <p className='ml-auto'>Amount</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-20 mx-36 my-12'>
                        <h1 className='text-center font-bold text-main text-xl '>
                            No placement Found
                        </h1>
                    </div>
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="second" pt="xs">
                <div className='flex justify-center'>
                    <p className='text-center text-xl font-semibold'>Shipment history</p>
                    <Autocomplete
                        className='ml-32'
                        icon={<FaCaretDown />}

                        placeholder="Filter by status"
                        data={['Shipment created', 'Assigned for Pickup', 'Processing', 'Cancelled', 'Dispute', 'Delivered', 'Visited', 'Resolved', 'Onward Processing']}
                    />
                </div>
                <div>
                    <div className='flex mx-36 font-semibold'>
                        <p className='mr-auto'>Details</p>
                        <p className='ml-auto'>Amount</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-20 mx-36 my-12'>
                        <h1 className='text-center font-bold text-main text-xl '>
                            No shipment Found
                        </h1>
                    </div>
                </div>
            </Tabs.Panel>
            <Tabs.Panel value='third' pt='xs'>
                <div className='flex justify-center'>
                    <p className='text-center text-xl font-semibold'>Shipment history</p>
                    <Autocomplete
                        className='ml-32'
                        icon={<FaCaretDown />}

                        placeholder="Filter by status"
                        data={['All', 'Processing', 'Processed']}
                    />
                </div>
                <div>
                    <div className='flex mx-36 font-semibold'>
                        <p className='mr-auto'>Details</p>
                        <p className='ml-auto'>Amount</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-20 mx-36 my-12'>
                        <h1 className='text-center font-bold text-main text-xl '>
                            No shipment Found
                        </h1>
                    </div>
                </div>
            </Tabs.Panel>
        </Tabs>
    )
}

export default Tab