import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        rank: 3,
        team: 'csictf',
        points: 1450,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787644107,
                points: 300,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787649405,
                points: 510,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787653405,
                points: 640,
            },
        ],
    },
    {
        rank: 7,
        team: 'GreyFang',
        points: 1620,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787648107,
                points: 380,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787649905,
                points: 550,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787652405,
                points: 690,
            },
        ],
    },
    {
        rank: 9,
        team: 'bi0s',
        points: 1674,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787643107,
                points: 399,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787647005,
                points: 587,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787652345,
                points: 678,
            },
        ],
    },
    {
        rank: 8,
        team: '3k',
        points: 1621,
        country: 'Turkey',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787644907,
                points: 401,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787645405,
                points: 523,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787651405,
                points: 697,
            },
        ],
    },
    {
        rank: 4,
        team: 'Zh3r0',
        points: 1516,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787641307,
                points: 411,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787644605,
                points: 514,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787653905,
                points: 591,
            },
        ],
    },
    {
        rank: 5,
        team: 'irNoobs',
        points: 1569,
        country: 'Iran',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787639417,
                points: 313,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787643505,
                points: 522,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787653135,
                points: 633,
            },
        ],
    },
    {
        rank: 6,
        team: 'InfosecIITR',
        points: 1588,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787641937,
                points: 396,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787646415,
                points: 521,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787652415,
                points: 671,
            },
        ],
    },
    {
        rank: 2,
        team: 'warlock_rootx',
        points: 1446,
        country: 'India',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787641437,
                points: 391,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787646415,
                points: 511,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787652995,
                points: 544,
            },
        ],
    },
    {
        rank: 1,
        team: 'Shellphish',
        points: 1433,
        country: 'USA',
        submissions: [
            {
                qid: Math.random().toString(32),
                timestamp: 1602787641207,
                points: 301,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787646105,
                points: 533,
            },
            {
                qid: Math.random().toString(32),
                timestamp: 1602787650005,
                points: 599,
            },
        ],
    },
];

const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState: initialState.sort((team1, team2) => team1.rank - team2.rank),
    reducers: {},
});

export const selectScoreboard = (state) => state.scoreboard;

export default scoreboardSlice.reducer;
