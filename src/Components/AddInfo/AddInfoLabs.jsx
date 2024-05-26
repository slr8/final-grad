import React, { useState } from 'react'
import Select from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const options2 = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 }
  ]
const AddInfoLabs = ({ day,start, cancel, labNumber  }) => {
    const labNames = {
        1: '0أ',
        2: '0ب',
        3: '0ج',
        4: '0د',
        5: '0ه',
        6: '1أ',
        7: '1ب',
        8: '1ج',
        9: '1د',
        10: '1ه',
        11: '2أ',
        12: '2ب',
        13: '2ج',
        14: '2د',
        15: '2ه',
        16: '3أ',
        17: '3ب',
        18: '3ج',
        19: '3د',
        20: '3ه',
        21: '4أ',
        22: '4ب',
        23: '4ج',
        24: '4د',
        25: '4ه'
    };
    const labName = labNames[labNumber];
    const [formData, setFormData] = useState({
        course: '',
        professor: '',
        duration: '',
        year: '',
        department: '',
        section: ''
    });

    const handleChange = (field, selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { ...formData, day, start,labName });
    };
    return (
        <form onSubmit={handleSubmit} className='bg-gray-300  w-80 h-52 rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
            <input type="hidden" name="day" value={day} /> {/* Hidden input for day */}
            <input type="hidden" name="startTime" value={start} /> {/* Hidden input for startTime */}
            <div className='flex flex-col'>
                <div className='flex gap-2 mx-2'>
                    <Select
                     options={options} 
                     placeholder="Course"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                    onChange={(selectedOption) => handleChange('course', selectedOption)}
                      />
                    <Select 
                    options={options}
                     placeholder="Prof" 
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('professor', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 mx-2 mt-3'>
                    <Select 
                    options={options2} 
                    placeholder="Duration"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('duration', selectedOption)}
                     />
                    <Select options={options} 
                    placeholder="Year"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('year', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 mx-2 mt-3'>
                    <Select 
                    options={options}
                     placeholder="Department"
                      className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                      onChange={(selectedOption) => handleChange('department', selectedOption)}
                      />
                    <Select
                     options={options}
                      placeholder="Section"
                       className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                       onChange={(selectedOption) => handleChange('section', selectedOption)}
                       />
                </div>
            </div>
            <div className='flex gap-5 mt-3'>
                <button className='bg-red-700 ml-5  mt-1 py-1 px-4' onClick={cancel}>Cancel</button>
                <button className='bg-green-500 ml-0  mr-5 mt-1 py-1 px-4'>Submit</button>
            </div>
        </form >
    )
}

export default AddInfoLabs