import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import about from '../public/image/pages banner/about-us.svg'
import OfferingCard from '@/components/OfferingCard'
import { BiWallet } from 'react-icons/bi'
import { GiPayMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdOutlineHighQuality, MdOutlineInventory2, MdOutlinePeopleAlt } from 'react-icons/md'

const aboutus = () => {
    return (
        <>
            <Head>
                <title>
                    DOMESTICS LOGISTICS | GIG LOGISTICS
                </title>
            </Head>
            <div className='bg-background text-text'>
                <div className='ssm:pt-10 ssm:mx-6 sm:mx-8 md:mx-36 lg:mx-14'>
                    <div className='grid place-items-center'>
                        <h1 className='mb-5 font-bold ssm:text-2xl lg:text-5xl text-[#374151]'>Who are we</h1>
                        <p>A reputation for speed and reliability</p>
                    </div>
                    <div className='grid lg:grid-cols-2 sm:gap-10 md:gap-10 lg:gap-28 pb-12 mt-24'>
                        <Image src={about} alt='Man delivering package' priority={true} />
                        <div className='text-[#374151] ssm:mt-10'>
                            <p className='mb-5'>
                                GIGL is Africa&apos;s leading indigenous logistics company powered by technology
                                with a solid reputation for Ecommerce and social commerce-tailored logistics.
                            </p>
                            <p className='mb-5'>
                                We started in 2012 with a conviction that Ecommerce and social commerce are only possible with logistics.
                                We followed through with a simple goal: remove the conventional hassles associated with last-mile deliveries
                                and make logistics easy for individuals and corporates anywhere, anytime.
                            </p>
                            <p className='mb-5'>
                                Since our first shipment in 2012, GIGL has expanded in leaps and bounds, connecting African vendors to global
                                buyers and sellers by introducing its simplified “overseas shipping services” across several continents.
                            </p>
                            <p className='mb-5'>
                                At GIGL, we pour our hearts into every detail, from packaging to handling and eventual delivery to end users.
                                Our agility, commitment to service excellence and data-centric approach help us provide our customers with
                                lasting solutions to critical logistic challenges. We are mindful of our corporate, environmental and social
                                responsibilities, so we only engage in ethical business practices.
                            </p>
                        </div>
                    </div>
                    <div className='grid place-items-center mb-10'>
                        <h1 className='text-3xl font-bold'>Our Vision</h1>
                        <p className='text-xl'>To be Africa&apos;s leading Ecommerce logistics platform.</p>
                    </div>
                    <div className='grid place-items-center pb-24'>
                        <h1 className='text-3xl font-bold'>Our Mission</h1>
                        <p className='text-xl'>We are committed to relentlessly exceed customer&apos;s expectation through innovative technology solutions for logistics</p>
                    </div>
                    <div>
                        <div className='h-full ssm:py-24 md:pb-96 lg:py-24'>
                            <h1 className='text-[#374151] font-bold text-center text-3xl mb-10'>Our dedicated offerings to you</h1>
                            <div className='grid md:grid-cols-2 ssm:gap-10 md:gap-10 lg:grid-cols-3 lg:gap-10'>
                                <OfferingCard text='INNOVATION' info="We are always finding ways to innovate in logistics because we
                                    believe endless possibilities exist. Innovation is deeply ingrained in our corporate culture and has
                                    consistently been our driving force for growth. We engineer new products and services that address
                                    market needs by leveraging technology and customer insights. Our solutions are intentionally suited
                                    for efficient and practical results."
                                    icon={<MdOutlineInventory2 />}
                                />
                                <OfferingCard text='QUALITY' info="We have a track record for innovation within the logistics sector
                                    and place premium value on enhancing and sustaining quality throughout the organization. We practice
                                    and maintain “kaizen,” a continuous cycle of process improvements, to deliver operational excellence."
                                    icon={<MdOutlineHighQuality />}
                                />
                                <div className=' md:absolute md:mt-80 md:w-2/5 md:ml-32 lg:ml-0 lg:w-fit lg:mx-0 lg:mt-0 lg:relative'>
                                    <OfferingCard text='PEOPLE' info="Ecommerce is nothing without logistics, so is GIGL without her employees. 
                                        They are the bedrock of all that we do, with a passion for excellence that cuts across departments and roles. 
                                        Our employees are the most valuable assets, and we prioritize their well-being by striving to provide a 
                                        world-class work environment for our diverse and growing team."
                                        icon={<MdOutlinePeopleAlt />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutus