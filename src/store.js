import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './Pages/Login/loginSlice';

const store = configureStore({
    reducer: {
        auth: loginSlice
    },
});

export default store;