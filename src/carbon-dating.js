const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof(sampleActivity) != 'string' ) {
    return false;
  }
  let num = parseFloat(sampleActivity);
  if (isNaN(num) || num<=0 || num > 15) {
    return false;
  }
  num = parseFloat(sampleActivity);
  return Math.ceil(8268.3982*Math.log(15/num));
};
