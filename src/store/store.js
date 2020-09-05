import { configureStore } from '@reduxjs/toolkit';
import teamReducer from '../slices/teamSlice';
import themeReducer from '../slices/themeSlice';

export default configureStore({
    reducer: {
        team: teamReducer,
        theme: themeReducer,
    },
});
