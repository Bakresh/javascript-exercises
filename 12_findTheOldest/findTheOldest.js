const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const sorted = people.sort(function(a,b) {
        if (!a.yearOfDeath) {
            a.yearOfDeath = currentYear;
        }
        if (!b.yearOfDeath) {
            b.yearOfDeath = currentYear;
        }
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge < bAge ? 1 : -1;
    })
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
