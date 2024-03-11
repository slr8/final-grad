import React from 'react'
import DevicesRedBox from '../../Components/DevicesRedBox/DevicesRedBox'
import DevicesYellowBox from '../../Components/DevicesYellowBox/DevicesYellowBox'
import DevicesGreenBox from '../../Components/DevicesGreenBox/DevicesGreenBox'
import ScrollToTop from '../../UI/ScrollToTop'

const ITHallDevices5 = () => {
    return (
        <div className='mb-5'>
            <ScrollToTop />
            <div className="flex justify-center pt-8" >
                <div className="bg-[#0060E4] text-gradient rounded-2xl shadow-md h-16 w-52  text-center flex justify-center items-center">
                    <h1 className="text-4xl font-medium text-[#FFFFFF]">مدرج 5</h1>
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>All Devices</h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5'>
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
                />
                <DevicesRedBox
                    img={"/Images/ITDevices/Vector (1).png"}
                    name={"Projector"}
                />
                <DevicesYellowBox
                    img={"/Images/ITDevices/Vector.png"}
                    name={"Device No.5"}
                />
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
                />
                <DevicesRedBox
                    img={"/Images/ITDevices/Vector (1).png"}
                    name={"Projector"}
                />
                <DevicesYellowBox
                    img={"/Images/ITDevices/Vector.png"}
                    name={"Device No.5"}
                />
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
                />
                <DevicesGreenBox
                    img={"/Images/ITDevices/Vector (1).png"}
                    name={"Projector"}
                />
                <DevicesGreenBox
                    img={"/Images/ITDevices/Vector (1).png"}
                    name={"Projector"}
                />
            </div>
        </div>

    )
}

export default ITHallDevices5