import API from './API';

export async function requestChallenges() {
    const { data } = await API.get('/challenges');

    const {
        success,
        message,
        error,
        categories,
    } = data;

    if (!success) {
        return { message, error };
    }

    return categories;
}

export async function checkFlag({ flag }) {
    const { data } = await API.post('/challenges/submit', {
        flag,
    });

    const {
        success,
        message,
        error,
        correct,
        id,
    } = data;

    if (!success) {
        return { message, error };
    }

    return { id, correct };
}

export async function getSolves({ id }) {
    const { data } = await API.post('/challenges/solves', {
        id,
    });

    const {
        success,
        message,
        error,
        solves,
    } = data;

    if (!success) {
        return { message, error };
    }

    return solves;
}
