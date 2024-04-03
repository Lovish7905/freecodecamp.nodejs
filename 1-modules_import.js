const mo=require("./1-modules_export");

console.log(mo);
 mo.temp.run();
let arr_size=mo.temp.arr.length;

for(let i=0;i<arr_size;i++){
    console.log(mo.temp.arr[i]);
}

