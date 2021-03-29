const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let res = [];
  let allSepArr = [];
  let allSep = '';

  let key = options.additionRepeatTimes;
  if ((!key) && (options.addition)) {
    key = 1;
  }
  let addSep = options.additionSeparator;
  if (!addSep) {
    addSep = '|';
  }
      for (let i = 0; i < key; i++) {
        allSepArr.push(String(options.addition));
        allSepArr.push(addSep);
      }
      allSepArr.pop();

    allSep = allSepArr.join('');

     key = options.repeatTimes;
     if (!key) {
       return str + options.addition;
     }
      for (let i = 0; i < key; i++) {
        res.push(str+allSep);
    }

    key = options.separator;
    if(!key) {
      key = "+";
    }
    res = res.join(key);

  return res;
};
  
