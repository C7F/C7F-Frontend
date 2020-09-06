import { createSlice } from '@reduxjs/toolkit';

const THEMES = {
    dracula: {
        fgColor: '#f8f8f2',
        bgColor: '#282a36',
        dark: '#44475a',
        primary: '#6272a4',
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

export const { themeUpdate } = themeSlice.actions;

export const getTheme = (state) => state.theme;

export default themeSlice.reducer;
