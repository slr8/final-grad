import React, { useEffect, useState } from 'react'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import Header from '../../Components/Header/Header'
import ScrollToTop from '../../UI/ScrollToTop'
import axios from 'axios'

const TADetails = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://localhost:44377/api/TeachingStaff/ViewTeachingAssistant');
            setData(response.data);
        };

        fetchData();
    }, []);

    return (
        <div className='bg-[#C5D1F2] h-full'>
            <ScrollToTop />
            <Header title={"TA's"} />
            <div className=' grid grid-cols-3 gap-y-14 place-items-center mt-8 pb-8'>
                {data &&
                    data.map(e => {
                        return (
                            <>
                                <TaProfBox
                                    key={e.ssn}
                                    name={e.fullName}
                                    dep={`${e.deptName} Department`}
                                    img={e.picture}
                                    info={e.discription}
                                    fb={e.facebookLink}
                                    li={e.linkedInLink}
                                    gm={e.acadimicMailLink}
                                    gh={e.githubLink}
                                />
                            </>
                        )
                    }
                    )
                }

            </div>
        </div>)
}

export default TADetails