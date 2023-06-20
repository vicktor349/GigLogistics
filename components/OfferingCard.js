import React from 'react'

const OfferingCard = ({ icon, info, text }) => {
    return (
        <div className='text-[#374151] rounded-xl ssm:py-8 ssm:px-4 sm:px-2 sm:w-fit sm:py-6 lg:py-6 lg:px-4 flex flex-col text-center shadow-lg bg-white'>
            <div className='flex justify-center items-center text-6xl'> {icon}</div>
            <h4 className='text-lg font-semibold py-2'>{text}</h4>
            <p className='text-xs'>{info}</p>
        </div>
    )
}

export default OfferingCard