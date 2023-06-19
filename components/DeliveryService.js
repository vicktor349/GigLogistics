import React from 'react'
import Card from './Card'
import { MdOutlineLocalShipping, MdOutlineShoppingCart } from 'react-icons/md'
import { SiYourtraveldottv } from 'react-icons/si'
import { CgNotes } from 'react-icons/cg'



const DeliveryService = () => {
    return (
        <div className='relative mt-[22%] bg-background py-32'>
            <h1 className='text-center text-3xl font-bold ssm:text-2xl lg:text-4xl pb-12'>Seamless delivery services</h1>
            <div className='grid ssm:mx-4 sm:mx-6 sm:grid-cols-2 md:mx-28 lg:grid-cols-4 gap-0 lg:mx-8 xl:mx-16'>
                <Card href='#' text='Ship Now' icon={<MdOutlineLocalShipping />} info='Request Pick Up/Delivery and Xpress Drop-off' />
                <Card href='/' text='Overseas Shipping' icon={<SiYourtraveldottv />} info='Ship from UK/USA to Nigeria & Export to 230 plus locations worldwide' />
                <Card href='/' text='Get a Quick Quote' icon={<CgNotes />} info='Calculate cost estimate for local & international shipments' />
                <Card href='/' text='Personal Shopper' icon={<MdOutlineShoppingCart />} info='We shop quality products for you & ship to your doorstep' />
            </div>
            <div>
            </div>
        </div>
    )
}

export default DeliveryService