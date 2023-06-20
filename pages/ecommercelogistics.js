import React from 'react'
import Head from 'next/head'
import { BsArrowLeft, BsBox2, BsCashCoin } from 'react-icons/bs'
import Image from 'next/image'
import ecommerce from '../public/image/pages banner/ecommerce.jpg'
import Link from 'next/link'
import OfferingCard from '@/components/OfferingCard'
import { HiOutlineTruck, HiOutlineUserGroup } from 'react-icons/hi2'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FiTruck } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { BiWallet } from 'react-icons/bi'
import { GiPayMoney } from 'react-icons/gi'



const ecommercelogistics = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>
                    ECOMMERCE LOGISTICS | GIG LOGISTICS
                </title>
            </Head>
            <div className='bg-background'>
                <div className='ssm:pt-10 ssm:mx-6 sm:mx-8 md:mx-36 lg:mx-14'>
                    <div className='sm:flex sm:items-center'>
                        <div className='sm:absolute flex items-center hover:cursor-pointer text-xl' onClick={() => router.back()}>
                            <BsArrowLeft className='mr-2' /> Back
                        </div>
                        <div className='mx-auto my-12 sm:mt-24 md:mt-24 text-center'>
                            <h1 className='text-center mb-5 font-bold text-3xl text-[#374151]'>ECOMMERCE LOGISTICS</h1>
                            <p className='text-[#374151] text-center'> Empowering small businesses with innovative logistics support</p>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 sm:gap-10 md:gap-10 lg:gap-28 pb-12'>
                        <Image src={ecommerce} alt='Woman Holding a box' priority={true} />
                        <div className='text-[#374151]'>
                            <p className='mt-4 mb-5'>
                                A successful Ecommerce business needs effective and reliable logistics to support its daily delivery needs.
                                As a leading logistics service company powered by technology, we fully grasp the essence of Ecommerce.
                                We are at the forefront of creating innovative solutions that empower Ecommerce businesses.
                            </p>
                            <p className='mb-5'>
                                If you're an online business, Business to Business (B2B), Business to Customer (B2C), Customer to Customer (C2C)
                                or multichannel retailer, let us work in partnership with you to create the right delivery solutions that help
                                you achieve your goals.
                            </p>
                            <div className='ssm:mt-12'>
                                <Link href='#' className='bg-[#D5343A] text-white py-3 px-5 rounded-sm font-medium md:mr-0 lg:mr-12'>
                                    Sign up as a merchant
                                </Link>
                                <p className='mt-5'>Already have an account?<Link href='#' className='text-[#D5343A] ml-3 font-semibold'>Login to your merchant account</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='h-full ssm:py-24 md:pb-96 lg:py-24'>
                        <h1 className='text-[#374151] font-bold text-center text-3xl mb-10'>Our dedicated offerings to you</h1>
                        <div className='grid md:grid-cols-2 ssm:gap-10 md:gap-10 lg:grid-cols-3 lg:gap-10'>
                            <OfferingCard text='Prepaid GIGGo Wallet' info="Pay for transactions ahead of time and easily too in a few clicks.
                                With a fully-funded wallet on your GIGGo App, you can pay for all your transactions with GIG Logistics.
                                Save yourself the stress of commuting to our walk-in centres or dealing with the limitations that come
                                with other forms of payments."
                                icon={<BiWallet />}
                            />
                            <OfferingCard text='The GIGL Class Plan' info="The GIGL Class Plan provides your business with the vital support
                                you need to offer premium delivery services to your customers. You get to enjoy up to 25% discount on local &
                                international shipping fees, free insurance cover, and more."
                                icon={<GiPayMoney />}
                            />
                            <div className=' md:absolute md:mt-80 md:w-2/5 md:ml-32 lg:ml-0 lg:w-fit lg:mx-0 lg:mt-0 lg:relative'>
                                <OfferingCard text='Cash on Delivery Services' info="Customer satisfaction is key. Our Cash on Delivery service
                                offers your customer a convenient means to pay, especially where they insist on physical inspection of the
                                product before accepting delivery. Full payment is collected from the customer on your behalf, either at
                                his doorstep or our experience centres and remitted directly to your bank account."
                                    icon={<BsCashCoin />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='h-full pt-8 pb-24 '>
                        <h1 className='text-[#374151] font-bold text-center text-3xl mb-10'>How we work</h1>
                        <div className='grid md:grid-cols-2 ssm:gap-10 md:gap-10 lg:grid-cols-3 lg:gap-10'>
                            <OfferingCard text='Same Day Delivery' info="GIG Logistics Same Day Delivery Services
                is the perfect choice for time-bound shipments intended for either pick-up or delivery.
                As the standard for logistics in Nigeria, our same day courier service is fast,
                reliable and easy to use."
                                icon={<BsBox2 />}
                            />
                            <OfferingCard text='Next Day Delivery' info="Our Next Day Delivery service isn't just swift
                but also affordable. Efficient express delivery will gain more customer trust for your
                business and improve your brand appeal. This service is perfect for SMEs looking to satisfy
                their customers and gain a competitive edge."
                                icon={<HiOutlineTruck />}
                            />
                            <OfferingCard text='Cash On Delivery' info="The Cash on Delivery Service guarantees secure payment
                for your goods from customers who prefer physical inspection of items upon delivery before payment.
                Increase patronage for your brand with this service, latching on the absolute convenience it offers
                your customer. Simply indicate an option for electronic payment as well Cash on Delivery on your
                online store."
                                icon={<BsCashCoin />}
                            />
                            <OfferingCard text='GIGGo Last-Mile Delivery' info="Distance is no barrier. We will pick up items
               from your doorstep and make special arrangements to deliver exactly to the locations you request,
                no matter how far. Our experienced dispatch riders are also available for same-day deliveries."
                                icon={<CiDeliveryTruck />}
                            />
                            <OfferingCard text='Reverse Logistics Service' info="Reverse Logistics Service manages items that
                are returned to or within Lagos; either as rejected or not picked up by your customer/other Third Party. 
                We offer three (3) free delivery attempts, after which charges will be made on subsequent attempts, 
                based on the delivery zone."
                                icon={<HiOutlineTruck />}
                            />
                            <OfferingCard text='Specialized Freight' info="You can confidently trust our operational capabilities.
               We are experts at moving high value and sensitive equipment used in diverse industries ranging from Medical
                to Laboratory, Communications & Broadcasting, Data- Processing sectors and High-tech Computers."
                                icon={<CiDeliveryTruck />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ecommercelogistics