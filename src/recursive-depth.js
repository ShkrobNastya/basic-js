const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, max = 1) {
    arr.forEach((item) => {
      let c = 1;
      if (Array.isArray(item)) {
        c = c + this.calculateDepth(item, c);
        max = Math.max(max, c);
      }
    });
    return max;
  }
};
