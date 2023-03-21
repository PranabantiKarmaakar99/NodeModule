let num1=parseInt(process.argv[2]);
let num2=parseInt(process.argv[3]);

function add(x,y){
return x+y;

}
function subtract(x,y){
    return x-y;
    
    }

exports.add= add;
exports.subtract = subtract;