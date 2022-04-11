let repeatingDigitArr = new Array();
for(let i = 1; i<100;i++)                 // number range between 1-100
{
    if(Math.floor(i/10) == i%10)
     repeatingDigitArr.push(i);
    }
console.log("The Number Digits between 1 to 100 which repeats twice are : "+repeatingDigitArr);