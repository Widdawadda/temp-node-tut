const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./ayo/first.txt', 'utf-8')
const second = readFileSync('./ayo/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./ayo/lul-L.txt', `Salami, Mr. Akhbari Tulafsami Parmayojaman Shastrimadibum Purjojonaye Tinglipingli this is result: ${first}, ${second}`)