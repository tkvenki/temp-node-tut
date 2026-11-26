const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs')
// fs.readFileSync('subfolder/test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     } )

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})