const fs = require("fs");
const path = require("path");
const discountPrice = require("./utils.js");


const FileName = process.argv[2];
const inputPath = path.join("input",FileName);
const outputPath = path.join("output",FileName);

// const data= fs.readFileSync(finalPath,"utf-8");
// const jsonData= JSON.parse(data);

// console.log(jsonData)

// let result = discountPrice.total_Price(jsonData,process.argv[3]);
// console.log(result);

if(fs.existsSync(inputPath)) {

    const data= fs.readFileSync(inputPath,"utf-8");
const jsonData= JSON.parse(data);

let result = discountPrice.total_Price(jsonData,process.argv[3]);
fs.writeFileSync(outputPath,JSON.stringify(result));
console.log("Writing Result to: " , outputPath);


} else{

    console.log("Error:inputFile not found",inputPath)
}
