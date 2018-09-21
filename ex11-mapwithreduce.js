
module.exports = function arrayMap(arr, fn) {
    return arr.reduce(
        (acc, item, index, arr) => {
            acc.push(fn.call(index, item, arr));
            return acc;
        },
        []
    );
}