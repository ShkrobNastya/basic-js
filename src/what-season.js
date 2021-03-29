const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  let m=date.getMonth();

  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }

  if (m >= 2 && m <= 4 ) {
    return 'spring';
  } else if (m >= 5 && m <=7 ) {
    return 'summer'; 
  } else if (m >= 8 && m <=10) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
