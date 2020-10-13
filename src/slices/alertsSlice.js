import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const initialState = [
    // {
    //     id: shortid(),
    //     type: 'error',
    //     message: 'Hello world!',
    // },
    // {
    //     id: shortid(),
    //     type: 'error',
    //     message: 'Hello world!',
    // },
];

const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert(state, action) {
            state.append({
                ...action.payload,
                id: shortid(),
            });
        },
        removeAlert(state, action) {
            state.filter((item) => item.id !== action.payload);
        },
    },
});

export const selectAlerts = (state) => state.alerts;

export default alertsSlice.reducer;
