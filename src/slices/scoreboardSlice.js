import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        rank: 1,
        team: 'csictf',
        points: 2500,
        country: 'India',
    },
    {
        rank: 2,
        team: 'GreyFang',
        points: 2300,
        country: 'India',
    },
    {
        rank: 3,
        team: 'bi0s',
        points: 2159,
        country: 'India',
    },
    {
        rank: 4,
        team: '3k',
        points: 2098,
        country: 'Turkey',
    },
    {
        rank: 5,
        team: 'Zh3r0',
        points: 2089,
        country: 'India',
    },
    {
        rank: 6,
        team: 'irNoobs',
        points: 1500,
        country: 'Iran',
    },
    {
        rank: 7,
        team: 'InfosecIITR',
        points: 1498,
        country: 'India',
    },
    {
        rank: 8,
        team: 'warlock_rootx',
        points: 1340,
        country: 'India',
    },
    {
        rank: 9,
        team: 'Shellphish',
        points: 1204,
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
