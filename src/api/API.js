import axios from 'axios';

const ax = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
});

export const setJWT = (token) => {
    ax.interceptors.request.use((config) => {
        const conf = config;
        conf.headers.Authorization = token;
        return conf;
    });
};

export default ax;
