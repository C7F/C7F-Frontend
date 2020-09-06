import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestLogin, requestTokenLogin } from '../api';

export const fetchToken = createAsyncThunk(
    'team/fetchToken',
    async ({ teamName, password }) => requestLogin({ name: teamName, password }),
);

export const fetchTokenUsingToken = createAsyncThunk(
    'team/fetchTokenUsingToken',
    async ({ loginToken }) => requestTokenLogin({ loginToken }),
);

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        name: '',
        points: 0,
        loggedIn: false,
        token: '',
    },
    reducers: {
        nameUpdate(state, action) {
            state.name = action.payload;
        },
    },
    extraReducers: {
        [fetchToken.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
        [fetchTokenUsingToken.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const selectTeam = (state) => state.team;

export const { nameUpdate } = teamSlice.actions;

export default teamSlice.reducer;
