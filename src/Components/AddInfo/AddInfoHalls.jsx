import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const AddInfoHalls = ({day,start, cancel, hallNumber }) => {
    const hallNames = {
        1: 'مدرج1',
        2: 'مدرج2',
        3: 'مدرج3',
        4: 'مدرج4',
        5: 'مدرج5',
        6: 'مدرج6',
        7: 'مدرج7',
        8: 'مدرج8',
        9: 'مدرج9',
        10: 'مدرج0أ',
        11: 'مدرج1أ',
        12: 'مدرج2أ',
        13: 'مدرج3أ',
        14: 'مدرج4أ'
    };
    const hallName = hallNames[hallNumber];
    
    const [formData, setFormData] = useState({
        course: '',
        professor: '',
        duration: '',
        year: '',
        department: '',
    });

    const handleChange = (field, selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { ...formData, day, start,hallName });
    };

    return (
        <form onSubmit={handleSubmit} className='bg-gray-300 w-80 h-52 rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
            <input type="hidden" name="day" value={day} /> {/* Hidden input for day */}
            <input type="hidden" name="startTime" value={start} /> {/* Hidden input for startTime */}
            <div className='flex flex-col'>
                <div className='flex gap-2 mx-2 mb-2'>
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
                        options={options}
                        placeholder="Duration"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('duration', selectedOption)}
                    />
                    <Select
                        options={options}
                        placeholder="Year"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('year', selectedOption)}
                    />
                </div>
                <div className='mt-3 flex justify-center'>
                    <Select
                        options={options}
                        placeholder="Department"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('department', selectedOption)}
                    />
                </div>
            </div>
            <div className='flex gap-5'>
                <button type="button" className='bg-red-700 ml-5 mt-3 py-1 px-4' onClick={cancel} >Cancel</button>
                <button type="submit" className='bg-green-500 ml-0 mr-5 mt-3 py-1 px-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddInfoHalls;
