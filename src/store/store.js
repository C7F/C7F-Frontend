import { configureStore } from '@reduxjs/toolkit';
import teamReducer from '../slices/teamSlice';
import themeReducer from '../slices/themeSlice';
import alertsReducer from '../slices/alertsSlice';
import challengesReducer from '../slices/challengesSlice';

export default configureStore({
    reducer: {
        team: teamReducer,
        theme: themeReducer,
        alerts: alertsReducer,
        challenges: challengesReducer,
    },
});
