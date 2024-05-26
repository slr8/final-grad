import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './Pages/Login/loginSlice';
import labs from './Pages/ITLabDevices/labSlice';
import halls from './Pages/ITHallDevices/hallSlice';

const store = configureStore({
    reducer: {
        auth: loginSlice,
        lab: labs,
        hall: halls
    },
});

export default store;