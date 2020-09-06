import { createSlice } from '@reduxjs/toolkit';

const THEMES = {
    dracula: {
        fgColor: '#f8f8f2',
        bgColor: '#282a36',
        dark: '#44475a',
        primary: '#6272a4',
        primText: '',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    vs2015: {
        fgColor: '#1e1e1e',
        bgColor: '#979797',
        dark: '#343A40',
        primary: '#595959',
        primText: '#FFFFFF',
        error: '#660000',
        default: '#44475a',
        warning: '',
    },
    'atom-one-dark': {
        fgColor: '#FFFFFF',
        bgColor: '#3C4E80',
        dark: '#343A40',
        primary: '#426CDF',
        primText: '#FFFFFF',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    monokai: {
        fgColor: '#272822',
        bgColor: '#7BBD87',
        dark: '#343A40',
        primary: '#31703C',
        primText: '#FFFFFF',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'gruvbox-dark': {
        fgColor: '#282828',
        bgColor: '#DEDE8D',
        dark: '#343A40',
        primary: '#acb7ae',
        primText: '#000000',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'solarized-light': {
        fgColor: '#FFFFFF',
        bgColor: '#5D5D5D',
        dark: '#343A40',
        primary: '#AF948B',
        primText: '#000000',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'tomorrow-night': {
        fgColor: '#2B2B2B',
        bgColor: '#B4B4B4',
        dark: '#343A40',
        primary: '#5b807a',
        primText: '#000000',
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
