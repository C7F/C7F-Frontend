import API from './API';

export async function requestChallenges() {
    const { data } = await API.get('/challenges');

    const {
        success,
        message,
        error,
        challenges,
    } = data;

    if (!success) {
        return { message, error };
    }

    const challengeTree = [];

    challenges.forEach((chall) => {
        const { category } = chall;

        if (!challengeTree[category]) {
            challengeTree[category] = [];
        }

        challengeTree[category].push(chall);
    });

    return { challenges, challengeTree };
}

export async function checkFlag({ flag }) {
    const { data } = await API.post('/challenges/submit', {
        flag,
    });

    const {
        success,
        message,
        error,
        id,
    } = data;

    if (!success) {
        return { message, error };
    }

    return id;
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
