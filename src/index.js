
const maths =  require("./maths.js"); 


let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let result1 = maths.add(num1,num2);
let result2 = maths.subtract(num1,num2)



console.log(result1,result2);
console.log(maths)

console.log(process.argv);


