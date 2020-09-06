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

export async function requestChallengeData({ id }) {
    const { data } = await API.get('/challenges', {
        params: {
            id,
        },
    });

    const {
        success,
        message,
        error,
        challenge,
    } = data;

    if (!success) {
        return { message, error };
    }

    return challenge;
}
