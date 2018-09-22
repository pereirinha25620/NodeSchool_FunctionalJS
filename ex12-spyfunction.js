
function Spy(target, method) {
    let counter = {
        count: 0
    }

    // Hold reference to the original function
    let spiedFunction = target[method];
    
    // Update target reference with modified function
    target[method] = function() {
        // Update counter object and call the spied function
        counter['count']++;
        return spiedFunction.apply(this, arguments);
    }

    return counter;
};

module.exports = Spy;