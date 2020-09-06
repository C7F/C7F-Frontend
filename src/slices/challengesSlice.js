import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestChallenges } from '../api';

export const fetchChallenges = createAsyncThunk(
    'challenges/fetchChallenges',
    async () => requestChallenges(),
);

const initialState = [
    {
        category: '',
        challenges: [
            {
                id: '',
                name: '',
            },
        ],
    },
];

const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    extraReducers: {
        [fetchChallenges.fulfilled]: (state, action) => {
            if (action.error) {
                return;
            }
            state = action.payload;
        },
    },
});

export default challengesSlice.reducer;
