
function reduce(arr, fn, initial){
    return (function inner(idx, val){
        if(idx < arr.length) {
            return inner(
                idx + 1,                    // Step one position in array
                fn(val, arr[idx], idx, arr) // Get the current value and use it as inital on next call    
            );
        }
        return val;                         // Break recursion
    })(0, initial);
};

module.exports = reduce;