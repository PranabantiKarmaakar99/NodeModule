let total_Price=function totalPrice(Array,discountPC) {
 

     let Result=0;
     Array.forEach((item)=>{ 
        
        
        Result += item.price * item.quantity;

        

})
 let discountedAmt = Result*discountPC/100;
 let finalPrice = Result-discountedAmt;
  
return {finalPrice,discountedAmt,Result};
}

exports.total_Price = total_Price;