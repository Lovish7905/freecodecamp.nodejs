/* There are two types of modules 
// 1: CommonJs = It is old reliable of NodeJs modules systems .
//               It uses 'require' to bring in modules and module.exports
//               to share functionality 
//
// 2:ES6(EcmaScript)=It is the modern way .It uses import and export statements
*/

//Common Js Code

const run = ()=> {
    console.log("CommonJs module working");
}
const arr=["apple" , "mango" , "grapes" ];

module.exports.temp={run,arr};//  exports: { temp: { run: [Function: run], arr: [Array] } }

//Other way
//module.exports={run,arr};    //    { run: [Function: run], arr: [ 'apple', 'mango', 'grapes' ] }
console.log(module);
