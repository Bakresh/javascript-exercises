const palindromes = function (phrase) {
    const processedPhrase = phrase.toLowerCase().replace(/[^A-Za-z]/g,'');
    const arrayPhrase = processedPhrase.split('');
    for (let i = 0; i < arrayPhrase.length; i++) {
        if (arrayPhrase[i] !== arrayPhrase[arrayPhrase.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
