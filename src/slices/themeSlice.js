import { createSlice } from '@reduxjs/toolkit';

const THEMES = {
    dracula: {
        fgColor: '#f8f8f2',
        bgColor: '#282a36',
        primary: '#bd93f9',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        name: 'dracula',
        ...THEMES.dracula,
    },
    reducers: {
        themeUpdate(state, action) {
            state = {
                name: action.payload,
                ...THEMES[action.payload],
            };
        },
    },
});

export const { nameUpdate } = themeSlice.actions;

export default themeSlice.reducer;
