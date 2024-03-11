import React from 'react'
import DevicesGreenBox from '../../../Components/DevicesGreenBox/DevicesGreenBox'
import DevicesRedBox from '../../../Components/DevicesRedBox/DevicesRedBox'
import DevicesYellowBox from '../../../Components/DevicesYellowBox/DevicesYellowBox'
import ScrollToTop from '../../../UI/ScrollToTop'

const ThirdFloorLabDevices1 = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="flex justify-center pt-8" >
                <div className="bg-[#0060E4] text-gradient rounded-2xl shadow-md h-16 w-52  text-center flex justify-center items-center">
                    <h1 className="text-4xl font-medium text-[#FFFFFF]">معمل 3أ</h1>
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>Computers</h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5'>
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
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
            <div className="flex  justify-end my-7"  >
                <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl flex justify-center items-center  rounded-l-2xl ">
                    <h3 >Devices specifications</h3>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-[#A3C0D1] w-full h-44 ml-72 mr-72 pt-10  rounded-3xl">
                    <p className="text-[#0060E4] text-center text-3xl font-semibold ">
                        Dell teaching desktop– Intel Core <br /> i7-13700F – 16GB Memory – NVIDIA <br /> GeForce RTX 3060 8GB
                        – 1TB HDD - Black
                    </p>
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2 my-7 text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>
                    Other devices
                </h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5 mb-8'>
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
                />
                <DevicesGreenBox
                    img={"/Images/ITDevices/Group.png"}
                    name={"AC"}
                />
                <DevicesRedBox
                    img={"/Images/ITDevices/Vector (1).png"}
                    name={"Projector"}
                />
            </div>
        </div>

    )
}

export default ThirdFloorLabDevices1