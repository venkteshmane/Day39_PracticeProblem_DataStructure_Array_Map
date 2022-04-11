function getRandomNumber(){
    return Math.floor(Math.random()*(999-100+1)+100);
}
let randomNumArr = new Array();
for(i=0;i<10;i++){
    randomNumArr.push(getRandomNumber());
}

console.log("Random Number is :" +randomNumArr);

let firstSmallestNum=randomNumArr[0]; 
let firstLargestNum=randomNumArr[0]; 
let secondSmallestNum=randomNumArr[0];
let secondLargestNum=randomNumArr[0];

for (i=0; i<10 ; ++i)
     {
        if (firstLargestNum<randomNumArr[i])
        {
            secondLargestNum = firstLargestNum;
            firstLargestNum = randomNumArr[i];
        }
        if (firstSmallestNum>randomNumArr[i])
        {
            secondSmallestNum = firstSmallestNum;
            firstSmallestNum = randomNumArr[i];
        }

    }

// console.log("First Smallest Number is : " +firstSmallestNum)
console.log("Second Smallest Number is : " +secondSmallestNum)
// console.log("First Largest Number is : " +firstLargestNum)
console.log("Second Largest Number is : " +secondLargestNum)