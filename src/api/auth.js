import API from './API';

const routes = {
    register: '/auth/register',
    login: '/auth/login',
    tokenLogin: '/auth/tokenLogin',
};

export async function requestRegister({ name, password, email }) {
    const { data } = await API.post(routes.register, { name, password, email });

    const {
        success,
        message,
        error,
    } = data;

    if (!success) {
        return { message, error };
    }

    return true;
}

export async function requestLogin({ name, password }) {
    const { data } = await API.post(routes.login, { name, password });

    const {
        success,
        token,
        message,
        error,
    } = data;

    if (!success) {
        return { message, error };
    }

    return token;
}

export async function requestTokenLogin({ loginToken }) {
    const { data } = await API.post(routes.tokenLogin, { loginToken });
    const {
        success,
        token,
        message,
        error,
    } = data;

    if (!success) {
        return { message, error };
    }

    return token;
}
