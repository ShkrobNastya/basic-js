const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  if (!Array.isArray(members)) {
    return false;
  }

  let arr=[];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i])==='string') {
      let a=members[i].split('');
      let j = 0;
      while (a[j] == ' ') {
        j++;
      }
      arr.push(a[j].toUpperCase());
       arr.sort();
    }
  }

  return arr.join('');
};
