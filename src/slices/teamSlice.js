import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        name: '',
        score: 0,
    },
    reducers: {
        nameAdded: {
            reducer(state, action) {
                const s = state;
                s.team = action.payload;
            },
            prepare(name) {
                return {
                    payload: {
                        name,
                        score: 0,
                    },
                };
            },
        },
    },
});

export const selectTeam = (state) => state.team;

export const { nameAdded } = teamSlice.actions;

export default teamSlice.reducer;
