import React from 'react'
import Head from 'next/head'
import { BsArrowLeft, BsBoxSeam } from 'react-icons/bs'
import Image from 'next/image'
import domestic from '../public/image/pages banner/domestic.jpg'
import Link from 'next/link'
import OfferingCard from '@/components/OfferingCard'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FiTruck } from 'react-icons/fi'
import { useRouter } from 'next/router'


const domesticlogistics = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>
          DOMESTICS LOGISTICS | GIG LOGISTICS
        </title>
      </Head>
      <div className='bg-background'>
        <div className='ssm:pt-10 ssm:mx-6 sm:mx-8 md:mx-36 lg:mx-14'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:absolute flex items-center hover:cursor-pointer text-xl' onClick={() => router.back()}>
              <BsArrowLeft className='mr-2' /> Back
            </div>
            <div className='mx-auto my-12 sm:mt-24 md:mt-24 text-center'>
              <h1 className='text-center mb-5 font-bold text-3xl text-[#374151]'>DOMESTIC LOGISTICS</h1>
              <p className='text-[#374151] text-center'> Reliable, Affordable and Easily Accessible Logistics with Nationwide Coverage </p>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 sm:gap-10 md:gap-10 lg:gap-28 pb-12'>
            <Image src={domestic} alt='Man delivering package' priority={true} />
            <div className='text-[#374151]'>
              <p className='mt-4 mb-5'>
                As a logistics company with longstanding operations, we focus on strategic points to fulfil your logistics needs.
                Our strong network of 122 experience centres spread across Nigeria provides maximum coverage,
                which makes for the fastest deliveries and easy access to services.
              </p>
              <p className='mb-5'>
                We provide multiple options to deliver, at the best rates.
                Whether you are sending parcels within your city or to a different state,
                GIG Logistics offers the most affordable domestic courier service to virtually every location in Nigeria.
                Our Same Day Delivery service has the cheapest prices nationwide!
              </p>
              <p className='mb-5'>
                With our domestic courier service, your experience is personalized.
                We pick up parcels and deliver them to your doorstep, at your convenience.
                You can request our services online via the website, through the GIGGo App or walk into any of our centres.
                Our trusted personnel are on standby to find the best solution that meets your needs.
              </p>
              <div className='ssm:mt-12'>
                <Link href='#' className='bg-[#D5343A] text-white py-3 px-5 rounded-sm font-medium mr-12'>
                  Ship now
                </Link>
                <Link href='#' className='bg-[#E5E7EB] text-[#D5343A] py-3 px-5 rounded-sm font-medium'>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
          <div className='h-full py-24'>
            <h1 className='text-[#374151] font-bold text-center text-3xl mb-10'>Our dedicated offerings to you?</h1>
            <div className='grid md:grid-cols-2 ssm:gap-10 md:gap-10 lg:grid-cols-3 lg:gap-10'>
              <OfferingCard text='Priority Shipping' info="We put you first! With our established reputation 
                for speed and reliability, GIGL offers priority shipping service to meet your needs daily, 
                every single hour. If getting that package to its destination means a lot to you, 
                then it's important to us."
                icon={<MdOutlineLocalShipping />}
              />
              <OfferingCard text='Xpress Drop-Off' info="Time is precious and we will help you save it. 
              Skip the queues at our experience centres and cut the time it takes to process an item 
              for shipping. Our Xpress Drop-Off service enables you to fast track shipment of your 
              items using the GIGGo App."
                icon={<BsBoxSeam />}
              />
              <OfferingCard text='GIGGo Partners' info="Creating opportunities for wealth distribution
               is an objective we take seriously. Through this service, you get to earn lucrative income
                on the side. Our most basic requirement from you is a functional vehicle, fit to description
                 and a qualified rider. We bring business your way and split the profits."
                icon={<HiOutlineUserGroup />}
              />
              <OfferingCard text='GIGGo Last-Mile Delivery' info="Distance is no barrier. We will pick up items
               from your doorstep and make special arrangements to deliver exactly to the locations you request,
                no matter how far. Our experienced dispatch riders are also available for same-day deliveries."
                icon={<CiDeliveryTruck />}
              />
              <OfferingCard text='Moving & Relocation Services' info="Creating personalized logistics service is
               at the core of what we do. We make custom arrangements to help you move items safely from your home or office.
                No matter the size of your items, we will move them."
                icon={<FiTruck />}
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

export default domesticlogistics