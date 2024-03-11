import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ConatactUs/ContactUs';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import ITHalls from './Pages/ITHalls/ITHalls';
import ITHome from './Pages/ITHome/ITHome';
import ITLabs from './Pages/ITLabs/ITLabs';
import Login from './Pages/Login/Login';
import Material from './Pages/Material/Material';
import ProfDetails from './Pages/ProfDetails/ProfDetails';
import Schedule from './Pages/Schedule/Schedule';
import TADetails from './Pages/TADetails/TADetails';
import AppLayout from './UI/AppLayout';
import CoursesDetails3 from './Pages/CoursesDetails/CoursesDetails3';
import ITHallDevices5 from './Pages/ITHallDevices/ITHallDevices5';
import ThirdFloorLabDevices1 from './Pages/ITLabDevices/ThirdFloor/ThirdfFloorLabDevices1';
import JoiningApp from './Pages/JoiningApp/JoiningApp';
import HallsSchedule from './Pages/AdminSchedules/HallsSchedule';
import LabsSchedule from './Pages/AdminSchedules/LabsSchedule';
import ProfSchedule from './Pages/AdminSchedules/ProfSchedule';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/joiningApp",
        element: <JoiningApp />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/home/professor",
        element: <ProfDetails />
      },
      {
        path: "/home/ta",
        element: <TADetails />
      },
      {
        path: "/home/schedule",
        element: <Schedule />
      },
      {
        path: "/home/courses",
        element: <Courses />
      },
      {
        path: "/home/courses/coursesDetails3",
        element: <CoursesDetails3 />
      },
      {
        path: "/home/material",
        element: <Material />
      },
      {
        path: "/itHome",
        element: <ITHome />
      },
      {
        path: "/itHome/itHalls",
        element: <ITHalls />
      },
      {
        path: "/itHome/itHalls/itHallsDevices5",
        element: <ITHallDevices5 />
      },
      {
        path: "/itHome/itLabs",
        element: <ITLabs />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices1",
        element: <ThirdFloorLabDevices1 />
      },
      {
        path: "hallsSchedule",
        element: <HallsSchedule />
      },
      {
        path: "labsSchedule",
        element: <LabsSchedule />
      },
      {
        path: "ProfSchedule",
        element: <ProfSchedule />
      },
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}
export default App;
