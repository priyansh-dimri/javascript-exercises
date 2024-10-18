const sumAll = function(start, end) {
    // start and end can only be of `number` data type
    if(isNaN(start) || isNaN(end)) return "ERROR";

    // Both start and end should be non-negative
    if(start < 0 || end < 0) return "ERROR";

    // Both start and end should be non-negative integers and not decimals
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"

    // If start is greater than end, we reverse their values
    if(start > end) [start, end] = [end, start];

    let sum = 0;

    for(; start <= end; ++start) {
        sum += start;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
