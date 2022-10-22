const fibonacci = function(num) {
    intNum = parseInt(num);
    arrayNum = [1,1];
    if (intNum < 1) {
        return "OOPS"
    } else {
        if (intNum > 2) {
            for (let i = 2; i < intNum; i++) {
                arrayNum[i] = arrayNum[i-1] + arrayNum[i-2];
            }
        }
        return arrayNum[intNum - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
