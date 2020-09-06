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
    vs2015: {
        fgColor: '#1e1e1e',
        bgColor: '#b5aea5',
        dark: '#353d42',
        primary: '#7a7676',
        error: '#660000',
        default: '#44475a',
        warning: '',
    },
    'atom-one-dark': {
        fgColor: '#09868b',
        bgColor: '#c7cc93',
        dark: '#82716e',
        primary: '#acb7ae',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    Monokai: {
        fgColor: '#09868b',
        bgColor: '#f7f7f7',
        dark: '#82716e',
        primary: '#acb7ae',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'gruvbox-dark': {
        fgColor: '#09868b',
        bgColor: '#f7f7f7',
        dark: '#82716e',
        primary: '#acb7ae',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'solarized-light': {
        fgColor: '#09868b',
        bgColor: '#f7f7f7',
        dark: '#82716e',
        primary: '#acb7ae',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
    'tomorrow-night': {
        fgColor: '#09868b',
        bgColor: '#f7f7f7',
        dark: '#82716e',
        primary: '#5b807a',
        error: '#ff5555',
        default: '#44475a',
        warning: '',
    },
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        name: 'dracula',
        ...THEMES['atom-one-dark'],
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

export default themeSlice.reducer;
