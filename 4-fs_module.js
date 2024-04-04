const {readFileSync,writeFileSync,readFile,writeFile}=require('fs');  // Sync File System=readFileSync,writeFileSync || Async FS=readFile,writeFile


// Sync File System
// Reading Files
/*
const first=readFileSync("./content/subfolder/first.txt","utf-8");
const second=readFileSync("./content/subfolder/second.txt","utf-8");

//Writing files

const third=writeFileSync("./content/subfolder/third.txt",first + second);
const thirdRead=readFileSync("./content/subfolder/third.txt","utf-8");
console.log(thirdRead);

*/

//Async File System


readFile("./content/subfolder/first.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

writeFile("./content/subfolder/async-file.txt","async file text is created",(err,res)=>{
    if(err){
        console.log("Some errror occured");
        return;
    }
    console.log("File created successfully");
})
