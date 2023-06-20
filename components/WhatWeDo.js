import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2'
import { FaRegClock } from 'react-icons/fa'
import WhatwedoCard from './WhatwedoCard'


const WhatWeDo = () => {
    return (
        <div className='bg-background pt-28 pb-24'>
            <div className='ssm:text-center sm:mx-9 md:mx-36 lg:mx-16 mb-24'>
                <h1 className='font-bold text-3xl mb-2'>We take the</h1>
                <h1 className='text-[#d5343a] text-3xl font-bold'>burden of logistics off you.</h1>
            </div>
            <div className='ssm:mx-5 sm:mx-9 md:mx-36 lg:mx-16 sm:grid sm:grid-cols-3 sm:gap-8'>
                <WhatwedoCard text='Latest Technology' info='Technology and its application are fundamental at GIGL. 
                We understand the role of technology in providing an exceptional customer experience. 
                For this reason, our processes, products and services are built around modern technology 
                to help us deliver your shipments cheaper,
                safely and at the speed of light.'
                    icon={<GrTechnology className='text-3xl mb-4' />}
                />
                <WhatwedoCard text='Social Commerce' info='Pivotal to successful social commerce transactions is 
                the ability for the end-user to receive items where and when needed. With an unmatched route 
                network spanning urban and rural communalities, GIGL is the solution to efficient last-mile delivery. 
                As a merchant, you only have to think about selling your products while GIGL delivers to your customers 
                worldwide.'
                    icon={<HiOutlineSquare3Stack3D className='text-3xl mb-4' />}
                />
                <WhatwedoCard text='Guaranteed Delivery' info='We are conscious of the relationship between time and money 
                and utilize our resources optimally to meet your delivery needs. Our service commitment to you is hassle-free 
                delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy 
                innovative delivery solutions that help small businesses.'
                    icon={<FaRegClock className='text-3xl mb-4' />}
                />
            </div>
        </div>
    )
}

export default WhatWeDo