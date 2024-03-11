import React from 'react'

const MaterialBox = ({ text }) => {
    return (
        <div class="text-center border text-white bg-[#0060E4] text-xl  rounded-2xl col-start-1 col-end-2  h-[65px] pt-4
            max-[430px]:ml-4 max-[430px]:w-96
            sm:ml-32 sm:w-96
            md:ml-60 md:w-96
            min-[992px]:ml-[100px] min-[992px]:w-96 
            lg:ml-[200px] lg:w-96
            xl:w-[461px]  xl:ml-[250px]">
            <a href="" className='text-xl font-bold'>{text}</a>
        </div>)
}

export default MaterialBox