import React from 'react'

const WhatwedoCard = ({ icon, text, info }) => {
    return (
        <div className='text-[#0a0a0a] ssm:mb-12 sm:mb-0'>
            <h1>{icon}</h1>
            <h1 className='font-bold text-lg ssm:mb-5 sm:mb-9 text-[#0a0a0a]'>{text}</h1>
            <h3>{info}</h3>
        </div>
    )
}

export default WhatwedoCard