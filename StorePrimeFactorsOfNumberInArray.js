const prompt = require("prompt-sync") ()
let primeFactorArr = new Array();
let num = parseInt(prompt("Enter the Number : "))
for(i=1; i<number; i++){
    if(number%i==0) {
     let temp=1;
        
     for(j=2; j<i; j++) {
          if(i%j==0){
             temp=0;
          }
    }
        
         if(temp==1){
             primeFactArr.push(i);
         } else {
             temp=1;
         }
     }
  }
console.log("prime factors of number : "+num + " are : "+primeFactorArr);