import { useState } from "react";
import AddInfoHalls from "../AddInfo/AddInfoHalls";
import AddOnHover from "../AddOnHover/AddOnHover";
import FirstColumnCell from "../UserCells/FirstColumnCell/FirstColumnCell";
import CRUDOnHover from "../CRUDOnHover/CRUDOnHover";

const labData = {
    "schedule": [
        {
            "teachingStaffName": "Daniel Anderson",
            "courseName": "Introduction to Programming",
            "day": "thursday",
            "startTime": 15,
            "duration": 3,
            "year": 4,
            "location": "مدرج2",
            "section": 7,
            "groupNumber": null,
            "departmentName": null
        },
        {
            "teachingStaffName": "John Smith",
            "courseName": "Course 31",
            "day": "sunday",
            "startTime": 8,
            "duration": 4,
            "year": 4,
            "location": "مدرج3",
            "section": null,
            "groupNumber": null,
            "departmentName": "BI"
        }
    ]
}
const generateAppointments = (day, hall, labNum, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i + labNum}`;
        appointmentsObj[appointmentKey] = labData.schedule.find(e =>
            e.day.toLowerCase() === day.toLowerCase() && e.startTime === i && e.location === hall
        );
    }
    return appointmentsObj;
};
export const halls = {
    ...generateAppointments("Sunday", "مدرج1", "1", 8, 19),
    ...generateAppointments("Sunday", "مدرج2", "2", 8, 19),
    ...generateAppointments("Sunday", "مدرج3", "3", 8, 19),
    ...generateAppointments("Sunday", "مدرج4", "4", 8, 19),
    ...generateAppointments("Sunday", "مدرج5", "5", 8, 19),
    ...generateAppointments("Sunday", "مدرج6", "6", 8, 19),
    ...generateAppointments("Sunday", "مدرج7", "7", 8, 19),
    ...generateAppointments("Sunday", "مدرج8", "8", 8, 19),
    ...generateAppointments("Sunday", "مدرج9", "9", 8, 19),
    ...generateAppointments("Sunday", "مدرج0أ", "10", 8, 19),
    ...generateAppointments("Sunday", "مدرج1أ", "11", 8, 19),
    ...generateAppointments("Sunday", "مدرج2أ", "12", 8, 19),
    ...generateAppointments("Sunday", "مدرج3أ", "13", 8, 19),
    ...generateAppointments("Sunday", "مدرج4أ", "14", 8, 19),
    ...generateAppointments("monday", "مدرج1", "1", 8, 19),
    ...generateAppointments("monday", "مدرج2", "2", 8, 19),
    ...generateAppointments("monday", "مدرج3", "3", 8, 19),
    ...generateAppointments("monday", "مدرج4", "4", 8, 19),
    ...generateAppointments("monday", "مدرج5", "5", 8, 19),
    ...generateAppointments("monday", "مدرج6", "6", 8, 19),
    ...generateAppointments("monday", "مدرج7", "7", 8, 19),
    ...generateAppointments("monday", "مدرج8", "8", 8, 19),
    ...generateAppointments("monday", "مدرج9", "9", 8, 19),
    ...generateAppointments("monday", "مدرج0أ", "10", 8, 19),
    ...generateAppointments("monday", "مدرج1أ", "11", 8, 19),
    ...generateAppointments("monday", "مدرج2أ", "12", 8, 19),
    ...generateAppointments("monday", "مدرج3أ", "13", 8, 19),
    ...generateAppointments("monday", "مدرج4أ", "14", 8, 19),
    ...generateAppointments("tuesday", "مدرج1", "1", 8, 19),
    ...generateAppointments("tuesday", "مدرج2", "2", 8, 19),
    ...generateAppointments("tuesday", "مدرج3", "3", 8, 19),
    ...generateAppointments("tuesday", "مدرج4", "4", 8, 19),
    ...generateAppointments("tuesday", "مدرج5", "5", 8, 19),
    ...generateAppointments("tuesday", "مدرج6", "6", 8, 19),
    ...generateAppointments("tuesday", "مدرج7", "7", 8, 19),
    ...generateAppointments("tuesday", "مدرج8", "8", 8, 19),
    ...generateAppointments("tuesday", "مدرج9", "9", 8, 19),
    ...generateAppointments("tuesday", "مدرج0أ", "10", 8, 19),
    ...generateAppointments("tuesday", "مدرج1أ", "11", 8, 19),
    ...generateAppointments("tuesday", "مدرج2أ", "12", 8, 19),
    ...generateAppointments("tuesday", "مدرج3أ", "13", 8, 19),
    ...generateAppointments("tuesday", "مدرج4أ", "14", 8, 19),
    ...generateAppointments("wednesday", "مدرج1", "1", 8, 19),
    ...generateAppointments("wednesday", "مدرج2", "2", 8, 19),
    ...generateAppointments("wednesday", "مدرج3", "3", 8, 19),
    ...generateAppointments("wednesday", "مدرج4", "4", 8, 19),
    ...generateAppointments("wednesday", "مدرج5", "5", 8, 19),
    ...generateAppointments("wednesday", "مدرج6", "6", 8, 19),
    ...generateAppointments("wednesday", "مدرج7", "7", 8, 19),
    ...generateAppointments("wednesday", "مدرج8", "8", 8, 19),
    ...generateAppointments("wednesday", "مدرج9", "9", 8, 19),
    ...generateAppointments("wednesday", "مدرج0أ", "10", 8, 19),
    ...generateAppointments("wednesday", "مدرج1أ", "11", 8, 19),
    ...generateAppointments("wednesday", "مدرج2أ", "12", 8, 19),
    ...generateAppointments("wednesday", "مدرج3أ", "13", 8, 19),
    ...generateAppointments("wednesday", "مدرج4أ", "14", 8, 19),
    ...generateAppointments("thursday", "مدرج1", "1", 8, 19),
    ...generateAppointments("thursday", "مدرج2", "2", 8, 19),
    ...generateAppointments("thursday", "مدرج3", "3", 8, 19),
    ...generateAppointments("thursday", "مدرج4", "4", 8, 19),
    ...generateAppointments("thursday", "مدرج5", "5", 8, 19),
    ...generateAppointments("thursday", "مدرج6", "6", 8, 19),
    ...generateAppointments("thursday", "مدرج7", "7", 8, 19),
    ...generateAppointments("thursday", "مدرج8", "8", 8, 19),
    ...generateAppointments("thursday", "مدرج9", "9", 8, 19),
    ...generateAppointments("thursday", "مدرج0أ", "10", 8, 19),
    ...generateAppointments("thursday", "مدرج1أ", "11", 8, 19),
    ...generateAppointments("thursday", "مدرج2أ", "12", 8, 19),
    ...generateAppointments("thursday", "مدرج3أ", "13", 8, 19),
    ...generateAppointments("thursday", "مدرج4أ", "14", 8, 19),
};
console.log(halls);


export function useScheduleCells(day, halls, suffix) {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}8${suffixes[i]}`; // Unique key for each cell
        
        cells.push(
            <td rowSpan={currentSchedule?.duration} key={i} className="relative">
                {!currentSchedule && (
                    <AddOnHover 
                     handle={() => toggleCellState(cellKey)}
                      tr={cellStates[cellKey]}
                      />
                )}
                {cellStates[cellKey] && !currentSchedule?
                 <AddInfoHalls 
                 cancel={() => toggleCellState(cellKey)} 
                 day={day.toLowerCase()}
                 start={8}
                 hallNumber={suffixes[i]}
                 />:null}
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
                {currentSchedule && <CRUDOnHover/>}
            </td>
        );
    }

    return cells;
}
export const useScheduleCells2 = (day, halls, suffix) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}9${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}9${suffixes[i]}`; // Unique key for each cell
        cells.push(
            currentSchedule?.duration >= 2 ? null :
                <td rowSpan={currentSchedule2?.duration} key={i} className="relative">
                    {!currentSchedule2 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule2 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={9}
                        hallNumber={suffixes[i]}
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
                    {currentSchedule2 && <CRUDOnHover/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells3 = (day, halls, suffix) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}9${suffixes[i]}`];
        const currentSchedule3 = halls[`${day.toLowerCase()}10${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}10${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 3 || currentSchedule2?.duration >= 2 ? null :
                <td rowSpan={currentSchedule3?.duration} key={i} className="relative">
                    {!currentSchedule3 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule3 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={10}
                        hallNumber={suffixes[i]}
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
                    {currentSchedule3 && <CRUDOnHover/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells4 = (day, halls, suffix, one, two, three, four) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}${one}${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}${two}${suffixes[i]}`];
        const currentSchedule3 = halls[`${day.toLowerCase()}${three}${suffixes[i]}`];
        const currentSchedule4 = halls[`${day.toLowerCase()}${four}${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}${four}${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 4 || currentSchedule2?.duration >= 3 || currentSchedule3?.duration >= 2 ? null :
                <td rowSpan={currentSchedule4?.duration} key={i} className="relative">
                    {!currentSchedule4 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule4 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={four}
                        hallNumber={suffixes[i]}
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
                    {currentSchedule4 && <CRUDOnHover/>}
                </td>
        );
    }

    return cells;
};
