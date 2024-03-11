import React from 'react'

const DevicesYellowBox = ({ img, name }) => {
    return (
        <div className='bg-yellow-600 h-56 w-80  rounded-xl flex justify-center items-center flex-col pt-5'>
            <div className='h-18'>
                <img src={img} className='text-white mb-3' />
            </div>
            <div>
                <p className='text-2xl font-bold text-white mb-1'>{name}</p>
            </div>
            <div>
                <p className='text-2xl font-bold text-white mb-1'>Status:</p>
            </div>
            <div>
                <p className='text-2xl font-bold text-white mb-1'>In Repair</p>
            </div>
        </div>)
}

export default DevicesYellowBox