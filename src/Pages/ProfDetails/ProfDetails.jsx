import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import ScrollToTop from '../../UI/ScrollToTop'
import axios from 'axios'
import { useNavigation } from 'react-router-dom'

const ProfDetails = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44377/api/TeachingStaff/ViewProfessor');
                setData(response.data);
                console.log(data);
            } catch (error) {
                //console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-[#C5D1F2] h-full'>
            <ScrollToTop />
            <Header title={"Professors"} />
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
export default ProfDetails