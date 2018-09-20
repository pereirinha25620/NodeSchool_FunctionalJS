
function countWords(inputWords) {
    return inputWords.reduce(
        (res, val) => {
            res[val] = ++res[val] || 1;
            return res;
        }
        , new Object
    );
};

module.exports = countWords;