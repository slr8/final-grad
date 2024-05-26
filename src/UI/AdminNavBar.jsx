import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
    const [otherLinks, setOtherLinks] = useState(false)
    function handleClick(e) {
        e.preventDefault()
        setOtherLinks(!otherLinks)
    }
    return (
        <>
            <nav className='sticky top-0 z-[999]'>
                <div className="w-full mx-auto flex justify-between items-center bg-[#ffff] pb-3">
                    <div className="flex items-center  ml-[30px] ">
                        <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                        <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                    </div >
                    <ul className="flex space-x-10 items-center pt-4  justify-around ml-[40px]  pr-[100px] font-bold ">
                        <Link to={'/home'}> <li className={`text-[#0060E4] ml-[20px] text-[25px] focus text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`} > Home</li></Link>
                        <li onClick={handleClick} className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px]   rounded-lg">Other Links</li >
                        <Link to={''}> <li className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg ">About us </li></Link>
                        <Link to={'/contactus'}> <li className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">Contact us</li></Link>
                    </ul>
                    <div className={` w-[870px] ${otherLinks ? 'h-max' : 'h-0'} transition-all delay-75 z-50 rounded-b-xl bg-[#DAE4F4] absolute top-[68px] mx-auto inset-0 flex justify-start bg-[#DAE4F4FC]`}>
                        {otherLinks && (
                            <>
                                <div>
                                    <img src="/Images/Navbar/wallpaper.png" alt="logo" className="w-[398px] h-[350px]" />
                                </div>
                                <ul className="pt-[25px] ml-[80px]">
                                    <Link to={"/labsSchedule"}>
                                        <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Laboratories schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/hallsSchedule"}>
                                        <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Halls schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/ProfSchedule"}>
                                        <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Professors schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/ProfSchedule"}>
                                        <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Teaching Assistant schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={'/home/professor'}>   <div className="flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/1.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Prosessor</li>
                                    </div>
                                    </Link>
                                    <Link to={'/home/ta'}>  <div className="flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/2.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F] text-[22px] font-bold">Teaching Assistnt </li>
                                    </div>
                                    </Link>
                                    <Link to={'/home/courses'}><div className="flex  mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/3 book.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Courses</li>
                                    </div>
                                    </Link>
                                    <Link to={"/home/material"}>
                                        <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                            <img src="/Images/Navbar/5.png" alt="logo" className=" h-[45px]" />
                                            <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Materials</li>
                                        </div>
                                    </Link>
                                </ul>
                            </>)
                        }
                    </div>
                </div >
            </nav >
        </>)
}

export default AdminNavBar