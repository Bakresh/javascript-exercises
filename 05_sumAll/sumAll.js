const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a >= 0 && b >= 0) {
            if (a > b) {
                return (a*(a+1))/2-(b-1)*b/2;
            } else {
                return (b*(b+1))/2-(a-1)*a/2;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
