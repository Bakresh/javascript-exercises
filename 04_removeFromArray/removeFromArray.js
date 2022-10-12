const removeFromArray = function(arr, ...arrValues) {
    return arr.filter(val => !arrValues.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
