import React, { useState } from 'react'
import CRUDOnHover from '../CRUDOnHover/CRUDOnHover'
import AddOnHover from '../AddOnHover/AddOnHover'
import AddInfoHalls from '../AddInfo/AddInfoHalls'
import { generateScheduleCells, generateScheduleCells2, generateScheduleCells3, useScheduleCells4, halls, useScheduleCells, useScheduleCells2, useScheduleCells3 } from './hallsScripts'

const HallsBodySchedule = ({ day }) => {
    let [tr, setTrue] = useState(false)
    function handlesubmit(e) {
        setTrue(!tr)
    }
    function cancelsubmit(event) {
        event.preventDefault()
        setTrue(!tr)
    }
    function submit(e) {
        setTrue(!tr)
    }
    return (
        <>
            <tr className='text-center'>
                <td colSpan={16} className='bg-[#0060E4] text-white text-5xl font-bold sticky z-50 top-[166px]'>{day}</td>
            </tr>
            <tr>
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'])}
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, halls, ['10', '11', '12', '13', '14'])}
            </tr>
            <tr>
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'])}
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, halls, ['10', '11', '12', '13', '14'])}
            </tr> <tr>
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'])}
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, halls, ['10', '11', '12', '13', '14'])}
            </tr> <tr>
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 8, 9, 10, 11)}
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 8, 9, 10, 11)}
            </tr> <tr>
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 9, 10, 11, 12)}
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 9, 10, 11, 12)}
            </tr> <tr>
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 10, 11, 12, 13)}
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 10, 11, 12, 13)}
            </tr>
            <tr>
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 11, 12, 13, 14)}
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 11, 12, 13, 14)}
            </tr> <tr>
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 12, 13, 14, 15)}
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 12, 13, 14, 15)}
            </tr> <tr>
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 13, 14, 15, 16)}
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 13, 14, 15, 16)}
            </tr> <tr>
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 14, 15, 16, 17)}
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 14, 15, 16, 17)}
            </tr> <tr>
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 15, 16, 17, 18)}
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 15, 16, 17, 18)}
            </tr> <tr>
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, halls, ['1', '2', '3', '4', '5',"6",'7','8','9'], 16, 17, 18, 19)}
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, halls, ['10', '11', '12', '13', '14'], 16, 17, 18, 19)}
            </tr>
        </>
    )
}

export default HallsBodySchedule