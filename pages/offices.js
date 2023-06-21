import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Accordion } from '@mantine/core'

const offices = () => {
    return (
        <div className='bg-background text-text'>
            <div className='grid ssm:ml-[20%] sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:mx-16 md:mx-32 md:gap-12 lg:mx-10 py-12'>
                <div>
                    <h1 className='font-bold mb-2'>Nigeria Contact Centre No:</h1>
                    <div className='flex items-center'>
                        <FaPhoneAlt />
                        <p className='px-2 pb-1'>+2348139851120</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Ghana contact:</h1>
                    <div className='flex items-center'>
                        <IoMdMail />
                        <p className='pb-1' >giglghana@giglogistics.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaPhoneAlt />
                        <p className='px-2 pb-1'>+233575341111</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold mb-2'>UK contact:</h1>
                    <div className='flex items-center'>
                        <IoMdMail />
                        <p className='px-2 pb-1'>gigluk@giglogistics.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaPhoneAlt />
                        <p className='px-2 pb-1'>+447466844567</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold mb-2'>Houston contact:</h1>
                    <div className='flex items-center'>
                        <IoMdMail />
                        <p className='px-2 pb-1'>giglusa@giglogistics.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaPhoneAlt />
                        <p className='px-2 pb-1'>+832-998-9925</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold mb-2'>China contact:</h1>
                    <div className='flex items-center'>
                        <IoMdMail />
                        <p className='px-2 pb-1'>china@giglogistics.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaPhoneAlt />
                        <p className='px-2 pb-1'>+2349139346234</p>
                    </div>
                    <p>(WhatsApp only)</p>
                </div>
            </div>
            <div>
                <h1 className='text-center font-bold text-4xl pb-24'>Our Offices</h1>
            </div>
            <div className='grid md:grid-cols-3 ssm:mx-6 sm:mx-8 md:mx-32 lg:mx-14 pb-24'>
                <div className='font-semibold text-2xl mb-2'>
                    Nigeria
                </div>
                <div className='md:col-start-2 md:col-end-4 bg-background'>
                    <Accordion variant="separated" defaultValue="customization">
                        <Accordion.Item value="Abia">
                            <Accordion.Control>Abia</Accordion.Control>
                            <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Abuja">
                            <Accordion.Control>Abuja</Accordion.Control>
                            <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Adamawa">
                            <Accordion.Control>Adamawa</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Anambra">
                            <Accordion.Control>Anambra</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Akwa-Ibom">
                            <Accordion.Control>Akwa Ibom</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Bauchi">
                            <Accordion.Control>Bauchi</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Bayelsa">
                            <Accordion.Control>Bayelsa</Accordion.Control>
                            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default offices