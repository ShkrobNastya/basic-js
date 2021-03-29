const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  const text = [`--discard-next`,
  `--double-prev`, 
  `--double-next`,
  `--discard-prev`];

return arr.reduce((prev, cur, i) => {
if (text.includes(cur)) {
return prev;
}

if (arr[i - 1] == `--discard-next`) {
return prev;
}

if (arr[i - 1] == `--double-next`) {
prev.push(cur, cur);
} else {
prev.push(cur);
}

if (arr[i + 1] == `--discard-prev`) {
prev.splice(prev.length - 1, 1);
}

if (arr[i + 1] == `--double-prev`) {
prev.push(cur);
}
return prev;
}, []);
};
