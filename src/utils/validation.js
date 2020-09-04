module.exports = {
    validateEmail: (email, setError) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email && !emailRegex.test(email.toLowerCase())) {
            setError('Invalid email!');
            return false;
        }
        setError('');
        return true;
    },

    validateTeamName: (teamName, setError) => {
        const teamNameRegex = /^[^\s]{3,100}$/;

        if (teamName && !teamNameRegex.test(teamName)) {
            setError('Invalid team name!');
            return false;
        }
        setError('');
        return true;
    },

    validatePassword: (password, setError) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/;

        if (password && !passwordRegex.test(password)) {
            setError('Invalid password!');
            return false;
        }
        setError('');
        return true;
    },
};
