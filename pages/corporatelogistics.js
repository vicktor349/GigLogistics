import React from 'react'
import Head from 'next/head'
import { BsArrowLeft, BsBoxSeam } from 'react-icons/bs'
import Image from 'next/image'
import corporate from '../public/image/pages banner/corporate.jpg'
import Link from 'next/link'
import OfferingCard from '@/components/OfferingCard'
import { IoIosGlobe } from 'react-icons/io'
import { GiMedicines } from 'react-icons/gi'
import { CiDeliveryTruck } from 'react-icons/ci'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineWarehouse } from 'react-icons/md'

const corporatelogistics = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>
                    CORPOTATE LOGISTICS | GIG LOGISTICS
                </title>
            </Head>
            <div className='bg-background'>
                <div className='ssm:pt-10 ssm:mx-6 sm:mx-8 md:mx-36 lg:mx-14'>
                    <div className='sm:flex sm:items-center'>
                        <div className='sm:absolute flex items-center hover:cursor-pointer text-xl' onClick={() => router.back()}>
                            <BsArrowLeft className='mr-2' /> Back
                        </div>
                        <div className='mx-auto my-12 sm:mt-24 md:mt-24 text-center'>
                            <h1 className='text-center mb-5 font-bold text-3xl'>CORPORATE LOGISTICS</h1>
                            <p className='text-[#374151] text-center'> Corporate logistics solutions in sync with your business goals </p>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 sm:gap-10 md:gap-10 lg:gap-28 pb-12'>
                        <Image src={corporate} alt='Man delivering package' priority={true} />
                        <div className='text-[#374151]'>
                            <p className='mt-4 mb-5'>
                                Backed by our strategic partnerships, international network, expansive reach,
                                technological innovation and seamless customer experience, our corporate logistics
                                service is a quality choice you can confidently trust. Leading organizations such
                                as SWISS PHARMACEUTICALS, MINISO, BIERSDORF NIVEA, etc. have all established working
                                partnerships with us guaranteed by our history of credibility.
                            </p>
                            <p className='mb-5'>
                                We understand the importance of efficient logistics to your business. Hence, we create
                                a balance that connects our services to your corporate objectives. You will receive an
                                incredibly fair cost plan that matches your budget.
                            </p>
                            <p className='mb-5'>
                                Our services assist businesses across multiple industries and may be booked on demand.
                                A team of dedicated experts will facilitate your request in thorough detail with the highest
                                level of precision.
                            </p>
                            <div className='ssm:mt-12'>
                                <Link href='#' className='bg-[#D5343A] text-white py-3 px-5 rounded-sm font-medium mr-12'>
                                    Sign up as a corporate
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full py-24'>
                        <h1 className='text-[#374151] font-bold text-center text-3xl mb-10'>Our dedicated offerings to you</h1>
                        <div className='grid md:grid-cols-2 ssm:gap-10 md:gap-10 lg:grid-cols-3 lg:gap-10'>
                            <OfferingCard text='Personalized Overseas Services' info="Ship items directly into and out of Nigeria hassle-free.
                                You can easily arrange for inbound and outbound delivery through the customized services we provide. 
                                GIGL also provides special packaging services and transport solutions for companies within the technology sector."
                                icon={<IoIosGlobe />}
                            />
                            <OfferingCard text='Haulage and Freight services' info="Our extensive fleet of vehicles conveniently accommodates
                                Full Truck Load (FTL) and Less than Truck Load (LTL). This equips us to provide a comprehensive range of services
                                to various industries. To enhance value, we offer a pay as you use service with relative discounts. Our services
                                cater to major sectors of the economy, including agricultural, manufacturing and industrial sectors; as well as
                                speciality project work such as transporting pipes and crane work material."
                                icon={<TbTruckDelivery />}
                            />
                            <OfferingCard text='Pharma Logistics' info="We completely understand the extremely sensitive and time-critical
                                nature of medical shipments. Our system of handling medical courier services is designed to enable us to offer
                                personalized healthcare logistics solutions to hospitals, laboratories and pharmaceutical industries."
                                icon={<GiMedicines />}
                            />
                            <OfferingCard text='Warehousing & Inventory Management' info="Here at GIG Logistics, we manage large distribution
                                networks for our internal operations. This first-hand experience sharpens our detailed insight, to help us find
                                the perfect solution for your business. We are experts in the movement of goods across suppliers, vendors, and
                                customers. Tell us what you need."
                                icon={<CiDeliveryTruck />}
                            />
                            <OfferingCard text='Mail Room Services' info="For larger companies that often require inter-office mail delivery,
                                GIGL offers Mail Room services. Our couriers will pick up and disperse office mail on a daily or twice daily basis;
                                following your explicit instructions."
                                icon={<HiOutlineMailOpen />}
                            />
                            <OfferingCard text='Logistics Consultancy' info="Need advice on managing logistics for your business, call us! 
                                Let us guide you on how best to manage logistics for your business. We offer complete business solutions that 
                                are fast and easy, to drive results for your business. Our services support small, medium, large organizations."
                                icon={<MdOutlineWarehouse />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default corporatelogistics