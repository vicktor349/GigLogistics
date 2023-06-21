import React from 'react'
import { Accordion } from '@mantine/core'
import Head from 'next/head'

const faqs = () => {
    return (
        <>
            <Head>
                <title>Frequently Asked Questions | GIG Logistics</title>
            </Head>
            <div className='bg-background text-text'>
                <div className='pt-24'>
                    <h1 className='text-center font-bold text-4xl pb-24'>Frequently Asked Questions</h1>
                </div>
                <div className='ssm:mx-6 sm:mx-8 md:mx-32 lg:mx-14 pb-24'>
                    <div className='bg-background'>
                        <Accordion variant="separated" defaultValue="customization">
                            <Accordion.Item value="shipping">
                                <Accordion.Control>What is Overseas Shipping?</Accordion.Control>
                                <Accordion.Panel>Overseas shipping is a GIGL solution that allows you to ship items from any of your favorite stores anywhere in the world to your doorstep in Nigeria. You can also export items from Nigeria to over 230 locations worldwide, including the UK, USA, Ghana, China, Germany, and Canada.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="how do you ship">
                                <Accordion.Control>How do I ship from the USA/UK into Nigeria?</Accordion.Control>
                                <Accordion.Panel>Easy! Simply download the GIGGo App here to get started. Then click “Overseas Shipping” on the GIGGo App, select country and follow the prompts. The GIGL overseas shipment process is seamless and efficient.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="who can ship">
                                <Accordion.Control>Who can ship Overseas?</Accordion.Control>
                                <Accordion.Panel>Anyone with a fully updated user profile on the GIGGo App can ship Overseas. For Ecommerce merchants, you will need to use your regular account to ship.</Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value="How to make payment">
                                <Accordion.Control>How do I make payment?</Accordion.Control>
                                <Accordion.Panel>After we receive your item physically at either our UK or USA office, you will get a Payment link through which you can make payments. The link offers you the option of making secured payments through your funded wallet on the GIGGo App, a third-party payment platform (Paystack/Flutterwave), or your Bank Card.</Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value="Will my parcel be delivered">
                                <Accordion.Control>Will my parcel be delivered to my final destination anywhere in Nigeria</Accordion.Control>
                                <Accordion.Panel>Yes. We will deliver anywhere in Nigeria, so long as your preferred address is listed under the GIGL home delivery locations.As we constantly strive to serve you better, please note that we are rapidly expanding to cover all locations within Nigeria.</Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value="Require to pay in my account">
                                <Accordion.Control>Will GIGL require you to pay into any account?</Accordion.Control>
                                <Accordion.Panel>No, please. GIGL will never ask you to pay into any personal account.Payments can be made via:The GIGGo WalletGIG Logistics Bank Accounts and POS provided at our experience centres nationwide.</Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value="Price of shipping fee">
                                <Accordion.Control>How much is the shipping fee?</Accordion.Control>
                                <Accordion.Panel>Depending on the location,the size of the item and how valuable it is</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default faqs