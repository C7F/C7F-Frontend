import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        rank: 1,
        team: 'csictf',
        points: 500,
        country: 'India',
    },
    {
        rank: 2,
        team: 'GreyFang',
        points: 500,
        country: 'India',
    },
    {
        rank: 3,
        team: 'bi0s',
        points: 500,
        country: 'India',
    },
    {
        rank: 4,
        team: '3k',
        points: 500,
        country: 'Turkey',
    },
    {
        rank: 5,
        team: 'Zh3r0',
        points: 500,
        country: 'India',
    },
    {
        rank: 6,
        team: 'irNoobs',
        points: 500,
        country: 'Iran',
    },
    {
        rank: 7,
        team: 'InfosecIITR',
        points: 500,
        country: 'India',
    },
    {
        rank: 8,
        team: 'warlock_rootx',
        points: 500,
        country: 'India',
    },
    {
        rank: 9,
        team: 'Shellphish',
        points: 500,
        country: 'USA',
    },
];

const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState,
    reducers: {},
});

export const selectScoreboard = (state) => state.scoreboard;

export default scoreboardSlice.reducer;
