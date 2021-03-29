const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {

    if (!str || !key) {
      throw Error;
    }

    const strArr = str.toUpperCase().split('');
    let keyArr = key.toUpperCase();

    while (strArr.length > keyArr.length) {
      keyArr += keyArr;
    }

    keyArr = keyArr.split('');
    let temp = 0;
    const res = [];

    for (let l of strArr) {
      if (/[a-z]/i.test(l)) {
        res.push(String.fromCharCode((((l.charCodeAt(0) - 65) + (keyArr[temp++].charCodeAt(0) - 65)) % 26) + 65));
      } else {
        res.push(l);
      }
    }
    
    return this.direct ? res.join('') : res.reverse().join('');
  }    

  decrypt(str, key) {

    if (!str || !key) {
      throw Error;
    }

    const strArr = str.toUpperCase().split('');
    let keyArr = key.toUpperCase();

    while (strArr.length > keyArr.length) {
      keyArr += keyArr;
    }

    keyArr = keyArr.split('');
    let temp = 0;
    const res = [];

    for (let l of strArr) {
      if (/[a-z]/i.test(l)) {
        res.push(String.fromCharCode((((l.charCodeAt(0) - 65) + (26 - (keyArr[temp++].charCodeAt(0) - 65))) % 26) + 65));
      } else {
        res.push(l);
      }
    }
    
    return this.direct ? res.join('') : res.reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
