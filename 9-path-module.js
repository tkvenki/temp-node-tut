const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));  

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));


const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);