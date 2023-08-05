import React from 'react'
import { Tabs } from '@mantine/core';




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
                <p className='text-center'>Transaction history</p>
                <div>
                    <div className='flex mx-36 font-semibold'>
                        <p className='mr-auto'>Details</p>
                        <p className='ml-auto'>Amount</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-20 mx-36 my-12'>
                        <h1 className='text-center text-text font-xl '>
                            No placement Found
                        </h1>
                    </div>
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="second" pt="xs">
                Second tab color is blue, it gets this value from props, props have the priority and will
                override context value
            </Tabs.Panel>
            <Tabs.Panel value='third' pt='xs'>
                Third Teal
            </Tabs.Panel>
        </Tabs>
    )
}

export default Tab