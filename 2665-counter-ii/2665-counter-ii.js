/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   
    let currentCount = init;
    
    return {
        increment: function() {
            currentCount++;
            return currentCount;
        },
        decrement: function() {
            currentCount--;
            return currentCount;
        },
        reset: function() {
            currentCount = init;
            return currentCount;
        }
    };
};
