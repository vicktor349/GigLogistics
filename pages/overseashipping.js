import React from 'react'
import Head from 'next/head'
import { BsArrowLeft } from 'react-icons/bs'
import Image from 'next/image'
import flight from '../public/image/pages banner/overseas.jpeg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const overseashipping = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>
                    OVERSEAS SHIPPING LOGISTICS | GIG LOGISTICS
                </title>
            </Head>
            <div className='bg-background pb-32'>
                <div className='ssm:pt-10 ssm:mx-6 sm:mx-8 md:mx-24 lg:mx-14'>
                    <div className='sm:flex sm:items-center'>
                        <div className='sm:absolute flex items-center hover:cursor-pointer text-xl' onClick={() => router.back()}>
                            <BsArrowLeft className='mr-2' /> Back
                        </div>
                        <div className='mx-auto my-12 sm:mt-24 md:mt-24 text-center'>
                            <h1 className='text-center mb-5 font-bold text-3xl text-[#374151]'>OVERSEAS SHIPPING</h1>
                            <p className='text-[#374151] text-center'> Connect the world to your doorstep. Ship anything, anywhere, anytime </p>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 sm:gap-10 md:gap-4 lg:gap-28 pb-12'>
                        <Image src={flight} className='w-full object-fill' alt='Man delivering package' priority={true} />
                        <div className='text-[#374151]'>
                            <p className='text-2xl font-semibold mb-5 mt-4'>
                                Ship anything, anywhere, anytime…
                            </p>
                            <p className='mb-5'>
                                Shipping items across countries can be a challenge, especially with long delivery
                                timelines and shipping restrictions. However, at GIG Logistics, we are bridging
                                that gap by providing seamless, fast, and efficient overseas shipping service
                                from Nigeria to the world and vice versa.
                            </p>
                            <p className='mb-5'>
                                We do this by leveraging our robust network, fast-growing global footprint and the
                                innovative use of technology. We make it incredibly easy to ship and receive items
                                from any city in the world whether Dubai, UK, USA, Canada, Germany, Ghana and a
                                host of others. Get started by shipping your items at any of our experience centres
                                or by downloading the GIGGo App.
                            </p>
                            <div className='ssm:mt-12'>
                                <Link href='#' className='bg-[#D5343A] text-white py-3 px-5 rounded-sm font-medium mr-12'>
                                    Ship now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 sm:gap-16 text-text leading-6'>
                        <div className='ssm:mb-8'>
                            <h3 className='text-xl font-bold sm:mb-5 ssm:pb-2 ssm:pt-10'>Imports - Inbound Shipping (The United Kingdom)</h3>
                            <p className='mb-5'>
                                No more restricted shipping from stores in the UK us as Tesco, ASDA, Sainsbury, Primark.
                                GIG Logistics will ship all your items to Nigeria, promptly and efficiently.
                            </p>
                            <p className='mb-5'>
                                For more convenience, you can shop and ship directly from the UK using the Overseas Shipping
                                feature on the GIGGo App.
                            </p>
                            <p className='mb-5'>
                                You can visit our London experience centre  or shop and ship directly from the UK using the
                                Oversea Shipping feature on the GIGGo App.
                            </p>
                            <p className='mb-5'>
                                You will receive your order at your doorstep, anywhere in Nigeria (within 3/4 working days)
                                with our competitive shipping rates at <span className='font-bold'>£4.90/kg.</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold sm:mb-5 ssm:pb-2 ssm:pt-10'>Import - Inbound Shipping (The USA)</h3>
                            <p className='mb-5'>No more restricted shipping from stores such as Amazon, ebay, Costco, Walmart in the USA to Nigeria.
                                GIG Logistics will ship all your items into Nigeria, promptly and efficiently.
                            </p>
                            <p className='mb-5'>
                                You can visit our Houston experience centre  or shop and ship directly from the USA using the Oversea
                                Shipping feature on the GIGGo App.
                            </p>
                            <p>
                                You will receive your order at your doorstep, anywhere in Nigeria (within 7/ 14 working days) with our
                                competitive shipping rates at <span className='font-bold'>$4.49/lbs.</span>
                            </p>
                        </div>
                    </div>
                    <p className='text-text font-semibold'>"Regardless of your item, its quantity or size, just add to cart, we will deliver".</p>
                    <hr className='mb-8 mt-3' />
                    <div className='text-text'>
                        <h3 className='text-xl font-bold sm:mb-5 ssm:pb-2 ssm:pt-10'>To ship from the UK/US to Nigeria with the GIGGo App</h3>
                        <p className='my-2 font-medium'>Follow these easy steps:</p>
                        <ul className='leading-6 pl-4'>
                            <li>• Log into the GIGGo App.</li>
                            <li>• Click &apos;Overseas Shipping&apos; and select &apos;Send to Nigeria&apos;.</li>
                            <li>• Choose UK or US from the countries listed.</li>
                            <li>• Copy our UK/US address and paste as your delivery address at the store&apos;s checkout page.</li>
                            <li>• Return to the GIGGo App.</li>
                            <li>• Fill the item & delivery details.</li>
                            <li>• Choose your preferred means of identification.</li>
                            <li>• That&apos;s all. Your item will be delivered to you in a few days.</li>
                        </ul>
                    </div>
                    <div className='text-text grid sm:grid-cols-2 sm:gap-5 mt-8'>
                        <div>
                            <h3 className='text-xl font-bold sm:mb-5 ssm:pb-2 ssm:pt-10'>Import - Inbound Shipping (CHINA)</h3>
                            <p className='pb-6'>
                                No more restricted shipping from Chinese stores such as DHgate, Taobao, 1688.com and Alibaba.
                                GIG Logistics will ship all your items to Nigeria, promptly and efficiently.
                            </p>
                            <p className='pb-6'>
                                For your convenience, GIGL can shop and ship for you or deliver your shopped items using the
                                Overseas Shipping feature on the GIGGo App.
                            </p>
                            <p className='pb-6'>Or you can simply drop your items for shipping at our  China Warehouse address</p>
                            <p className='pb-6'>You can consolidate your items, pay in NAIRA and receive your items at your doorstep, anywhere in Nigeria.</p>
                            <p className='pb-6'>For shopping & shipping assistance, Chat KIM @ +234 913 9346 234</p>
                            <p className='pb-6'>To ship from China to Nigeria with the GIGGo App, follow these easy steps:</p>
                            <ul>
                                <li>• Log into the GIGGo App.</li>
                                <li>• Click &apos;Overseas Shipping&apos; and select &apos;Send to Nigeria&apos;.</li>
                                <li>• Choose CHINA from the countries listed.</li>
                                <li>• Choose &apos;Shop for me & deliver&apos; or &apos;Deliver my shopped items&apos;.</li>
                                <li>• For Personal Shopping, simply copy & paste product link you copied from websites, then fill item & delivery details.</li>
                                <li>• A shopping invoice will be generated for you. Upon payment, your items will be delivered to you.</li>
                                <li>• To ship your purchased items, simply copy our China warehouse address and paste at the store&apos;s checkout page.</li>
                                <li>• Return to the GIGGo App.</li>
                                <li>• Fill the item & delivery details.</li>
                                <li>• Choose your preferred means of identification.</li>
                                <li>• That&apos;s all. Your item will be delivered to you in a few days.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold sm:mb-5 ssm:pb-2 ssm:pt-10'>Export- Outbound Shipping</h3>
                            <p className='pb-6'>Ship your items from Nigeria to more than 230 locations worldwide, including the UK, Canada, USA, China and Germany.</p>
                            <p className='pb-6'>
                                We recognize the pivotal role homegrown brands play in relation to commerce in Nigeria. Guided by this, our outbound
                                shipping service is designed to boost the exports value chain by connecting small businesses with international markets.
                            </p>
                            <p className='pb-6'>Our services are not marginalized, we also cater to individual customers.</p>
                            <p className='pb-6'>
                                At the cheapest rates and within the fastest delivery timelines, you can send items out of Nigeria directly,
                                to more than 230 locations worldwide from any of our 122+ experience centres across the country.
                            </p>
                            <p className='pb-6'>
                                The possibilities are endless with our expansive network and strategic global partnerships.
                                All you need to do is walk into any of our centres or ship your items conveniently by downloading theGIGGo App.
                            </p>
                            <p className='pb-6'>
                                To ship from Nigeria to 230+ locations worldwide with the GIGGo App, follow these easy steps:
                            </p>
                            <ul>
                                <li>• Log into the GIGGo App.</li>
                                <li>• Click &apos;Overseas Shipping&apos; and select &apos;Send to Abroad&apos;.</li>
                                <li>• Fill in the Sender&apos;s & Receiver&apos;s information.</li>
                                <li>• Select package type & fill item details.</li>
                                <li>• Choose your preferred pickup vehicle.</li>
                                <li>• Enter other required details and choose your means of identification.</li>
                                <li>• The item will be delivered to the receiver in a few days.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default overseashipping