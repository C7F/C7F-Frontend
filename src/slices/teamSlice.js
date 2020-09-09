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

const getInitialTeam = (attribute, type) => {
    const currentTeam = JSON.parse(localStorage.getItem('team'));

    let fallback = '';
    if (type === 'boolean' || type === 'bool') {
        fallback = false;
    } else if (type === 'number') {
        fallback = 0;
    }

    return currentTeam ? currentTeam[attribute] || fallback : fallback;
};

const saveTeam = (attribute) => {
    const currentTeam = JSON.parse(localStorage.getItem('team'));
    localStorage.setItem('team', JSON.stringify({ ...currentTeam, ...attribute }));
};

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        name: getInitialTeam('name'),
        points: getInitialTeam('points', 'number'),
        loggedIn: getInitialTeam('loggedIn', 'boolean'),
        token: getInitialTeam('token'),
    },
    reducers: {
        nameUpdate(state, action) {
            state.name = action.payload;
            saveTeam({ name: action.payload });
        },
        tokenUpdate(state, action) {
            state.token = action.payload;
            saveTeam({ token: action.payload });
        },
        loggedInUpdate(state, action) {
            state.loggedIn = action.payload;
            saveTeam({ loggedIn: action.payload });
        },
    },
    extraReducers: {
        [fetchToken.fulfilled]: (state, action) => {
            // TODO: Logic to add errors to redux store
            if (action.error) {
                return;
            }
            state.token = action.payload;
            state.loggedIn = true;
            saveTeam({ token: action.payload, loggedIn: true });
        },
        [fetchTokenUsingToken.fulfilled]: (state, action) => {
            if (action.error) {
                return;
            }
            state.token = action.payload;
            state.loggedIn = true;
            saveTeam({ token: action.payload, loggedIn: true });
        },
    },
});

export const selectTeam = (state) => state.team;

export const {
    nameUpdate,
    tokenUpdate,
    loggedInUpdate,
} = teamSlice.actions;

export default teamSlice.reducer;
