import { configureStore } from '@reduxjs/toolkit';
import teamReducer from '../slices/teamSlice';

export default configureStore({
    reducer: {
        teamName: teamReducer,
    },
});
