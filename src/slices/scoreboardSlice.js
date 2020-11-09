import { createSlice } from '@reduxjs/toolkit';
import dummyScoreboard from '../utils/dummyScoreboard.json';

const initialState = dummyScoreboard;

const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState: initialState.sort((team1, team2) => team1.rank - team2.rank),
    reducers: {},
});

export const selectScoreboard = (state) => state.scoreboard;

export default scoreboardSlice.reducer;
