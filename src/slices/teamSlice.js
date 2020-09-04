import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        name: '',
        score: 0,
    },
    reducers: {
        nameUpdate(state, action) {
            state.name = action.payload;
        },
    },
});

export const selectTeam = (state) => state.team;

export const { nameUpdate } = teamSlice.actions;

export default teamSlice.reducer;
