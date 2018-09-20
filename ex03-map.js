
function doubleAll(numbers) {
    /* Lambda implementation */
    return numbers.map(
        num => num * 2
    );

    /* Anonymous function imple 
    return numbers.map(
        function(num) {
            return num * 2;
        }
    );
    */

    /* Named function implementation
    return numbers.map(
        function double(num) {
            return num * 2;
        }
    );
    */
}

module.exports = doubleAll;