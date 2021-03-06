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
        fgColor: '#C3DDE1',
        bgColor: '#1E1E1E',
        dark: '#44AAE6',
        primary: '#E89440',
        primText: '#FFFFFF',
        error: '#FF578F',
        default: '#44475a',
        warning: '',
    },
    'atom-one-dark': {
        fgColor: '#ABB2BF',
        bgColor: '#282C34',
        dark: '#E06C75',
        primary: '#5FA5D6',
        primText: '#FFFFFF',
        error: '#E06C75',
        default: '#44475a',
        warning: '',
    },
    monokai: {
        fgColor: '#F9F8F5',
        bgColor: '#272822',
        dark: '#75715E',
        primary: '#2AA198',
        primText: '#FFFFFF',
        error: '#F92672',
        default: '#44475a',
        warning: '',
    },
    'gruvbox-dark': {
        fgColor: '#EBDBB2',
        bgColor: '#282828',
        dark: '#75715E',
        primary: '#83A598',
        primText: '#FFFFFF',
        error: '#CC241D',
        default: '#44475a',
        warning: '',
    },
    'solarized-light': {
        fgColor: '#073642',
        bgColor: '#FDF6E3',
        dark: '#073642',
        primary: '#586E75',
        primText: '#FFFFFF',
        error: '#CB4B16',
        default: '#44475a',
        warning: '',
    },
    'tomorrow-night': {
        fgColor: '#F0C574',
        bgColor: '#1D1F21',
        dark: '#343A40',
        primary: '#8ABDB6',
        primText: '#FFFEFE',
        error: '#CC6666',
        default: '#44475a',
        warning: '',
    },
};

const getInitialTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme || !THEMES[currentTheme]) {
        return 'atom-one-dark';
    }
    return currentTheme;
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        name: getInitialTheme(),
        ...THEMES[getInitialTheme()],
    },
    reducers: {
        themeUpdate(state, action) {
            state = {
                name: action.payload,
                ...THEMES[action.payload],
            };
            localStorage.setItem('theme', action.payload);
            return state;
        },
    },
});

export const { themeUpdate } = themeSlice.actions;

export const getTheme = (state) => state.theme;

export const getThemeNames = () => Object.keys(THEMES);

export default themeSlice.reducer;
