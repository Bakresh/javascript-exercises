const ftoc = function(Fah) {
  let converted = (Fah - 32) * (5/9);
  return Math.round(converted * 10)/10;
};

const ctof = function(Cel) {
  let converted = Cel * (9/5) + 32;
  return Math.round(converted * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
