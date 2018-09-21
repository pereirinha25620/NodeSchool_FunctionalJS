
function duckCount() {
    let args = Array.prototype.slice.call(arguments, 0);
    return args.filter(
        (item) => Object.prototype.hasOwnProperty.call(item, 'quack')
    ).length;
};

module.exports = duckCount;