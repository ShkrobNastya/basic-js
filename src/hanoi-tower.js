const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let num = Math.pow(2,disksNumber) - 1;
  let sec = Math.floor(3600*num/turnsSpeed);
  let obj = {
    turns : num,
    seconds: sec
  };
  return obj;
};
