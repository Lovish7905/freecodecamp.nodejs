const path=require('path');


console.log(path.sep);

const file=path.join("/content","subfolder","example.txt");
console.log(file);
const filepath="content/subfolder/text.txt";
console.log(path.basename(filepath));

const absolutepath=path.resolve(__dirname);
console.log(absolutepath);