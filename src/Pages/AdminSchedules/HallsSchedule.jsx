import React from 'react'
import FirstColumnCell from '../../Components/UserCells/FirstColumnCell/FirstColumnCell'
import SecondColumnCell from '../../Components/UserCells/SecondColumnCell/SecondColumnCell'
import ThirdColumnCell from '../../Components/UserCells/ThirdColumnCell/ThirdColumnCell'
import FourthColumnCell from '../../Components/UserCells/FourthColumnCell/FourthColumnCell'
import FifthColumnCell from '../../Components/UserCells/FifthColumnCell/FifthColumnCell'
import ScrollToTop from '../../UI/ScrollToTop'
import HallsBodySchedule from '../../Components/HallsBodySchedule/HallsBodySchedule'

const HallsSchedule = () => {
    return (
        <div className='bg-[#0060E42B] w-max'>
            <ScrollToTop />
            <div>
                <div>
                    <table className='w-max'>
                        <thead className='sticky z-50 top-[68px]'>
                            <tr>
                                <th className='bg-white text-[#0060E4]'>مبنى المدرجات</th>
                                <th>مدرج 1</th>
                                <th>مدرج 2</th>
                                <th>مدرج 3</th>
                                <th>مدرج 4</th>
                                <th>مدرج 5</th>
                                <th>مدرج 6</th>
                                <th>مدرج 7</th>
                                <th>مدرج 8</th>
                                <th>مدرج 9</th>
                                <th className='bg-white text-[#0060E4]'>مبنى المعامل</th>
                                <th>مدرج 0أ</th>
                                <th>مدرج 1أ</th>
                                <th>مدرج 2أ</th>
                                <th>مدرج 3أ</th>
                                <th>مدرج 4أ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <HallsBodySchedule day={"Sunday"} />
                            <HallsBodySchedule day={"Monday"} />
                            <HallsBodySchedule day={"Tuesday"} />
                            <HallsBodySchedule day={"Wednesday"} />
                            <HallsBodySchedule day={"Thursday"} />
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    )
}

export default HallsSchedule