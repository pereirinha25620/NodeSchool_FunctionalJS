
let slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
        let varArgs = [namespace].concat(slice.call(arguments));
        console.log.apply(null, varArgs);
    }
};

module.exports = logger;