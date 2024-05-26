import { useState } from "react";
import AddInfoLabs from "../AddInfo/AddInfoLabs";
import AddOnHover from "../AddOnHover/AddOnHover";
import FirstColumnCell from "../UserCells/FirstColumnCell/FirstColumnCell";
import CRUDOnHover from "../CRUDOnHover/CRUDOnHover";

const labData = {
    "schedule": [
        {
            "teachingStaffName": "Daniel Anderson",
            "courseName": "Introduction to Programming",
            "day": "sunday",
            "startTime": 8,
            "duration": 1,
            "year": 4,
            "location": "0د",
            "section": 7,
            "groupNumber": null,
            "departmentName": null
        },
        {
            "teachingStaffName": "John Smith",
            "courseName": "Course 31",
            "day": "Monday",
            "startTime": 8,
            "duration": 4,
            "year": 4,
            "location": "0أ",
            "section": null,
            "groupNumber": null,
            "departmentName": "BI"
        }
    ]
}
const generateAppointments = (day, lab, labNum, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i + labNum}`;
        appointmentsObj[appointmentKey] = labData.schedule.find(e =>
            e.day.toLowerCase() === day.toLowerCase() && e.startTime === i && e.location === lab
        );
    }
    return appointmentsObj;
};
export const cellData = {
    ...generateAppointments("Sunday", "0أ", "1", 8, 19),
    ...generateAppointments("Sunday", "0ب", "2", 8, 19),
    ...generateAppointments("Sunday", "0ج", "3", 8, 19),
    ...generateAppointments("Sunday", "0د", "4", 8, 19),
    ...generateAppointments("Sunday", "0ه", "5", 8, 19),
    ...generateAppointments("Sunday", "1أ", "6", 8, 19),
    ...generateAppointments("Sunday", "1ب", "7", 8, 19),
    ...generateAppointments("Sunday", "1ج", "8", 8, 19),
    ...generateAppointments("Sunday", "1د", "9", 8, 19),
    ...generateAppointments("Sunday", "1ه", "10", 8, 19),
    ...generateAppointments("Sunday", "2أ", "11", 8, 19),
    ...generateAppointments("Sunday", "2ب", "12", 8, 19),
    ...generateAppointments("Sunday", "2ج", "13", 8, 19),
    ...generateAppointments("Sunday", "2د", "14", 8, 19),
    ...generateAppointments("Sunday", "2ه", "15", 8, 19),
    ...generateAppointments("Sunday", "3أ", "16", 8, 19),
    ...generateAppointments("Sunday", "3ب", "17", 8, 19),
    ...generateAppointments("Sunday", "3ج", "18", 8, 19),
    ...generateAppointments("Sunday", "3د", "19", 8, 19),
    ...generateAppointments("Sunday", "3ه", "20", 8, 19),
    ...generateAppointments("Sunday", "4أ", "21", 8, 19),
    ...generateAppointments("Sunday", "4ب", "22", 8, 19),
    ...generateAppointments("Sunday", "4ج", "23", 8, 19),
    ...generateAppointments("Sunday", "4د", "24", 8, 19),
    ...generateAppointments("Sunday", "4ه", "25", 8, 19),
    ...generateAppointments("monday", "0أ", "1", 8, 19),
    ...generateAppointments("monday", "0ب", "2", 8, 19),
    ...generateAppointments("monday", "0ج", "3", 8, 19),
    ...generateAppointments("monday", "0د", "4", 8, 19),
    ...generateAppointments("monday", "0ه", "5", 8, 19),
    ...generateAppointments("monday", "1أ", "6", 8, 19),
    ...generateAppointments("monday", "1ب", "7", 8, 19),
    ...generateAppointments("monday", "1ج", "8", 8, 19),
    ...generateAppointments("monday", "1د", "9", 8, 19),
    ...generateAppointments("monday", "1ه", "10", 8, 19),
    ...generateAppointments("monday", "2أ", "11", 8, 19),
    ...generateAppointments("monday", "2ب", "12", 8, 19),
    ...generateAppointments("monday", "2ج", "13", 8, 19),
    ...generateAppointments("monday", "2د", "14", 8, 19),
    ...generateAppointments("monday", "2ه", "15", 8, 19),
    ...generateAppointments("monday", "3أ", "16", 8, 19),
    ...generateAppointments("monday", "3ب", "17", 8, 19),
    ...generateAppointments("monday", "3ج", "18", 8, 19),
    ...generateAppointments("monday", "3د", "19", 8, 19),
    ...generateAppointments("monday", "3ه", "20", 8, 19),
    ...generateAppointments("monday", "4أ", "21", 8, 19),
    ...generateAppointments("monday", "4ب", "22", 8, 19),
    ...generateAppointments("monday", "4ج", "23", 8, 19),
    ...generateAppointments("monday", "4د", "24", 8, 19),
    ...generateAppointments("monday", "4ه", "25", 8, 19),
    ...generateAppointments("tuesday", "0أ", "1", 8, 19),
    ...generateAppointments("tuesday", "0ب", "2", 8, 19),
    ...generateAppointments("tuesday", "0ج", "3", 8, 19),
    ...generateAppointments("tuesday", "0د", "4", 8, 19),
    ...generateAppointments("tuesday", "0ه", "5", 8, 19),
    ...generateAppointments("tuesday", "1أ", "6", 8, 19),
    ...generateAppointments("tuesday", "1ب", "7", 8, 19),
    ...generateAppointments("tuesday", "1ج", "8", 8, 19),
    ...generateAppointments("tuesday", "1د", "9", 8, 19),
    ...generateAppointments("tuesday", "1ه", "10", 8, 19),
    ...generateAppointments("tuesday", "2أ", "11", 8, 19),
    ...generateAppointments("tuesday", "2ب", "12", 8, 19),
    ...generateAppointments("tuesday", "2ج", "13", 8, 19),
    ...generateAppointments("tuesday", "2د", "14", 8, 19),
    ...generateAppointments("tuesday", "2ه", "15", 8, 19),
    ...generateAppointments("tuesday", "3أ", "16", 8, 19),
    ...generateAppointments("tuesday", "3ب", "17", 8, 19),
    ...generateAppointments("tuesday", "3ج", "18", 8, 19),
    ...generateAppointments("tuesday", "3د", "19", 8, 19),
    ...generateAppointments("tuesday", "3ه", "20", 8, 19),
    ...generateAppointments("tuesday", "4أ", "21", 8, 19),
    ...generateAppointments("tuesday", "4ب", "22", 8, 19),
    ...generateAppointments("tuesday", "4ج", "23", 8, 19),
    ...generateAppointments("tuesday", "4د", "24", 8, 19),
    ...generateAppointments("tuesday", "4ه", "25", 8, 19),
    ...generateAppointments("wednesday", "0أ", "1", 8, 19),
    ...generateAppointments("wednesday", "0ب", "2", 8, 19),
    ...generateAppointments("wednesday", "0ج", "3", 8, 19),
    ...generateAppointments("wednesday", "0د", "4", 8, 19),
    ...generateAppointments("wednesday", "0ه", "5", 8, 19),
    ...generateAppointments("wednesday", "1أ", "6", 8, 19),
    ...generateAppointments("wednesday", "1ب", "7", 8, 19),
    ...generateAppointments("wednesday", "1ج", "8", 8, 19),
    ...generateAppointments("wednesday", "1د", "9", 8, 19),
    ...generateAppointments("wednesday", "1ه", "10", 8, 19),
    ...generateAppointments("wednesday", "2أ", "11", 8, 19),
    ...generateAppointments("wednesday", "2ب", "12", 8, 19),
    ...generateAppointments("wednesday", "2ج", "13", 8, 19),
    ...generateAppointments("wednesday", "2د", "14", 8, 19),
    ...generateAppointments("wednesday", "2ه", "15", 8, 19),
    ...generateAppointments("wednesday", "3أ", "16", 8, 19),
    ...generateAppointments("wednesday", "3ب", "17", 8, 19),
    ...generateAppointments("wednesday", "3ج", "18", 8, 19),
    ...generateAppointments("wednesday", "3د", "19", 8, 19),
    ...generateAppointments("wednesday", "3ه", "20", 8, 19),
    ...generateAppointments("wednesday", "4أ", "21", 8, 19),
    ...generateAppointments("wednesday", "4ب", "22", 8, 19),
    ...generateAppointments("wednesday", "4ج", "23", 8, 19),
    ...generateAppointments("wednesday", "4د", "24", 8, 19),
    ...generateAppointments("wednesday", "4ه", "25", 8, 19),
    ...generateAppointments("thursday", "0أ", "1", 8, 19),
    ...generateAppointments("thursday", "0ب", "2", 8, 19),
    ...generateAppointments("thursday", "0ج", "3", 8, 19),
    ...generateAppointments("thursday", "0د", "4", 8, 19),
    ...generateAppointments("thursday", "0ه", "5", 8, 19),
    ...generateAppointments("thursday", "1أ", "6", 8, 19),
    ...generateAppointments("thursday", "1ب", "7", 8, 19),
    ...generateAppointments("thursday", "1ج", "8", 8, 19),
    ...generateAppointments("thursday", "1د", "9", 8, 19),
    ...generateAppointments("thursday", "1ه", "10", 8, 19),
    ...generateAppointments("thursday", "2أ", "11", 8, 19),
    ...generateAppointments("thursday", "2ب", "12", 8, 19),
    ...generateAppointments("thursday", "2ج", "13", 8, 19),
    ...generateAppointments("thursday", "2د", "14", 8, 19),
    ...generateAppointments("thursday", "2ه", "15", 8, 19),
    ...generateAppointments("thursday", "3أ", "16", 8, 19),
    ...generateAppointments("thursday", "3ب", "17", 8, 19),
    ...generateAppointments("thursday", "3ج", "18", 8, 19),
    ...generateAppointments("thursday", "3د", "19", 8, 19),
    ...generateAppointments("thursday", "3ه", "20", 8, 19),
    ...generateAppointments("thursday", "4أ", "21", 8, 19),
    ...generateAppointments("thursday", "4ب", "22", 8, 19),
    ...generateAppointments("thursday", "4ج", "23", 8, 19),
    ...generateAppointments("thursday", "4د", "24", 8, 19),
    ...generateAppointments("thursday", "4ه", "25", 8, 19),
};

export function useScheduleCells(day, cellData, labs) {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell
    const [data, setData] = useState(cellData);
    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }
    function handleDelete(cellKey) {
        setData(prevData => {
            const updatedData = { ...prevData };
            delete updatedData[cellKey];
            return updatedData;
        });
    }

    const suffixes = labs;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}8${suffixes[i]}`; // Unique key for each cell

        cells.push(
            <td rowSpan={currentSchedule?.duration} key={i} className="relative">
                {!currentSchedule && (
                    <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                )}
                {cellStates[cellKey] && !currentSchedule? <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={8}
                        labNumber={suffixes[i]}
                        />
                        :null}
                {currentSchedule && (
                    <FirstColumnCell
                        doc={currentSchedule?.teachingStaffName}
                        subject={currentSchedule?.courseName}
                        place={currentSchedule?.location}
                        year={currentSchedule?.year}
                        section={currentSchedule?.section}
                        group={currentSchedule?.groupNumber}
                        dep={currentSchedule?.departmentName}
                    />
                )}
                {currentSchedule && <CRUDOnHover onDelete={() => handleDelete(cellKey)}/>}
            </td>
        );
    }

    return cells;
}
export const useScheduleCells2 = (day, cellData, labs) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}9${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}9${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 2 ? null :
                <td rowSpan={currentSchedule2?.duration} key={i} className="relative">
                    {!currentSchedule2 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule2 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={9}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule2 && (
                        <FirstColumnCell
                            doc={currentSchedule2?.teachingStaffName}
                            subject={currentSchedule2?.courseName}
                            place={currentSchedule2?.location}
                            year={currentSchedule2?.year}
                            section={currentSchedule2?.section}
                            group={currentSchedule2?.groupNumber}
                            dep={currentSchedule2?.departmentName}
                        />
                    )}
                    {currentSchedule2 && <CRUDOnHover tr={cellStates[cellKey]}/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells3 = (day, cellData, labs) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}9${suffixes[i]}`];
        const currentSchedule3 = cellData[`${day.toLowerCase()}10${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}10${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 3 || currentSchedule2?.duration >= 2 ? null :
                <td rowSpan={currentSchedule3?.duration} key={i} className="relative">
                    {!currentSchedule3 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule3 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={10}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule3 && (
                        <FirstColumnCell
                            doc={currentSchedule3?.teachingStaffName}
                            subject={currentSchedule3?.courseName}
                            place={currentSchedule3?.location}
                            year={currentSchedule3?.year}
                            section={currentSchedule3?.section}
                            group={currentSchedule3?.groupNumber}
                            dep={currentSchedule3?.departmentName}
                        />
                    )}
                    {currentSchedule3 && <CRUDOnHover tr={cellStates[cellKey]}/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells4 = (day, cellData, labs, one, two, three, four) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}${one}${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}${two}${suffixes[i]}`];
        const currentSchedule3 = cellData[`${day.toLowerCase()}${three}${suffixes[i]}`];
        const currentSchedule4 = cellData[`${day.toLowerCase()}${four}${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}${four}${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 4 || currentSchedule2?.duration >= 3 || currentSchedule3?.duration >= 2 ? null :
                <td rowSpan={currentSchedule4?.duration} key={i} className="relative">
                    {!currentSchedule4 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule4 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={four}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule4 && (
                        <FirstColumnCell
                            doc={currentSchedule4?.teachingStaffName}
                            subject={currentSchedule4?.courseName}
                            place={currentSchedule4?.location}
                            year={currentSchedule4?.year}
                            section={currentSchedule4?.section}
                            group={currentSchedule4?.groupNumber}
                            dep={currentSchedule4?.departmentName}
                        />
                    )}
                    {currentSchedule4 && <CRUDOnHover tr={cellStates[cellKey]}/>}
                </td>
        );
    }

    return cells;
};
