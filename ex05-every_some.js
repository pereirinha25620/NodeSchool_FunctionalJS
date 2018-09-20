
function checkUsersValid(validUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(
            submittedUser => validUsers.some(
                validUser => validUser.id === submittedUser.id
            )
        );
    }
};

module.exports = checkUsersValid;