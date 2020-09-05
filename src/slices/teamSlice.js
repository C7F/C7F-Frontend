import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestLogin } from '../api/auth';

export const fetchToken = createAsyncThunk('team/fetchToken', async ({ teamName, password }) => {
    const token = await requestLogin({ name: teamName, password });
    return token;
});

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        name: '',
        points: 0,
        loggedIn: false,
        loginToken: '',
    },
    reducers: {
        nameUpdate(state, action) {
            state.name = action.payload;
        },
    },
    extraReducers: {
        [fetchToken.fulfilled]: (state, action) => {
            state.loginToken = action.payload;
        },
    },
});

export const selectTeam = (state) => state.team;

export const { nameUpdate } = teamSlice.actions;

export default teamSlice.reducer;
