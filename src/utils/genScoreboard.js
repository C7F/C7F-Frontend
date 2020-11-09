function randString() {
    return Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
}

function genDummySubmissions(n) {
    function genRandomN(min, max, num) {
        const a = [];
        for (let i = 0; i < num; i += 1) {
            a.push(Math.round(Math.random() * (max - min) + min));
        }

        return a.sort((x, y) => x - y);
    }

    const timestamps = genRandomN(1602787639417, 1602787653905, n);
    const points = [0].concat(genRandomN(100, 1000, n - 1));

    const submissions = [];

    for (let i = 0; i < n; i += 1) {
        submissions.push({
            qid: randString(),
            timestamp: timestamps[i],
            points: points[i],
        });
    }

    return submissions;
}

function makeCountries() {
    const countries = [];

    for (let i = 0; i < 10; i += 1) {
        countries.push(randString());
    }

    return countries;
}

function genTeamData(countries) {
    const submissions = genDummySubmissions(5);
    const points = submissions.map((submission) => submission.points).reduce((a, b) => a + b);

    return {
        rank: 0,
        points,
        team: randString(),
        country: countries[Math.floor(Math.random() * countries.length)],
        submissions,
    };
}

function genScoreboard(n) {
    const countries = makeCountries();
    let scoreboard = [];
    for (let i = 0; i < n; i += 1) {
        scoreboard.push(genTeamData(countries));
    }

    scoreboard = scoreboard.sort((a, b) => b.points - a.points);

    // eslint-disable-next-line no-param-reassign
    scoreboard.forEach((item, index) => { item.rank = index + 1; });
    return scoreboard;
}

const fs = require('fs');

fs.writeFileSync('./dummyScoreboard.json', JSON.stringify(genScoreboard(50), null, 4));
