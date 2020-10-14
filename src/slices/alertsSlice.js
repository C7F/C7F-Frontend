import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    // {
    //     id: nanoid(),
    //     type: 'error',
    //     message: 'Hello world!',
    // },
    // {
    //     id: nanoid(),
    //     type: 'primary',
    //     message: 'Hello world!',
    // },
];

const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        removeAlert(state, action) {
            state = state.filter((item) => item.id !== action.payload);
            return state;
        },
        addAlert(state, action) {
            state.push(action.payload);
        },
    },
});

export const selectAlerts = (state) => state.alerts;
export const { addAlert, removeAlert } = alertsSlice.actions;

export const addAlertWithTimeout = (dispatch, alertOptions, time) => {
    const timeout = time || 5000;
    const id = nanoid();

    dispatch(addAlert({ ...alertOptions, id }));
    setTimeout(() => dispatch(removeAlert(id)), timeout);
};

export default alertsSlice.reducer;
