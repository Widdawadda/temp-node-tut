const path = require('path');

console.log(path.sep);

const filePath = path.join('\\ayo', 'ayayo', 'ayayayo.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'ayo', 'ayayo')
console.log(absolute);
