import React from 'react'
import MaterialBox from '../../Components/MaterialBox/MaterialBox'
import MaterialBox2 from '../../Components/MaterialBox/MaterialBox2'
import Header2 from '../../Components/Header/Header2'
import ScrollToTop from '../../UI/ScrollToTop'

const Material = () => {
    return (
        <div className='bg-[#0060E430] pb-10 pt-10'>
            <ScrollToTop />
            <div class=" grid grid-cols-2 mt-2 grid-rows-2 gap-4">
                <Header2 title={'Material'} />
                <MaterialBox text={'First Year (first semester)'} />
                <MaterialBox2 text={'First Year (second semester)'} />
                <MaterialBox text={'Second Year (first semester)'} />
                <MaterialBox2 text={'Second Year (Second semester)'} />
            </div>

            <div class="grid grid-cols-2 mt-11 grid-rows-4 gap-8">
                <Header2 title={'Third year'} />
                <MaterialBox text={'Computer Science  (first semester)'} />
                <MaterialBox2 text={'Computer Science  (second semester)'} />
                <MaterialBox text={'Information Technology  (first semester)'} />
                <MaterialBox2 text={'Information Technology  (second semester)'} />
                <MaterialBox text={'Information System  (first semester)'} />
                <MaterialBox2 text={'Information System  (second semester)'} />
                <MaterialBox text={'Multi-Media  (first semester)'} />
                <MaterialBox2 text={'Multi-Media  (second semester)'} />
            </div>

            <div class="grid grid-cols-2 mt-11 gap-8 mb-0">
                <Header2 title={'Fourth year'} />
                <MaterialBox text={'Computer Science  (first semester)'} />
                <MaterialBox2 text={'Computer Science  (second semester)'} />
                <MaterialBox text={'Information Technology  (first semester)'} />
                <MaterialBox2 text={'Information Technology  (second semester)'} />
                <MaterialBox text={'Information System  (first semester)'} />
                <MaterialBox2 text={'Information System  (second semester)'} />
                <MaterialBox text={'Multi-Media  (first semester)'} />
                <MaterialBox2 text={'Multi-Media  (second semester)'} />
            </div>
        </div>
    )
}

export default Material