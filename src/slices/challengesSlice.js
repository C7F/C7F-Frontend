import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestChallenges } from '../api';

export const fetchChallenges = createAsyncThunk(
    'challenges/fetchChallenges',
    requestChallenges,
);

const challengesSlice = createSlice({
    name: 'challenges',
    initialState: {
        challengeArray: [],
        challengeTree: {},
    },
    extraReducers: {
        [fetchChallenges.fulfilled]: (state, action) => {
            if (action.error) {
                return;
            }
            const { challenges, challengeTree } = action.payload;
            state.challengeArray = challenges;
            state.challengeTree = challengeTree;
        },
    },
});

export const selectChallengeTree = (state) => state.challenges.challengeTree;
export const selectChallengeArray = (state) => state.challenges.challengeArray;

export default challengesSlice.reducer;
