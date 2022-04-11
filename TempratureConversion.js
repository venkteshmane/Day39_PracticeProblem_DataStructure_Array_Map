const prompt = require("prompt-sync") ();
let conversion1 = "CelciusToFarenheit";
let conversion2 = "FarenheitToCelcius";
let temperature = parseInt(prompt("Enter the Temperature : "));

function temperatureConversion(chooseConversion)
{
    if(chooseConversion == conversion1 &&(temperature>=0 && temperature <=100))
    {
         return (temperature*(9/5)+32);
    }
    else if(chooseConversion == conversion2 &&(temperature >=32 && temperature<=212 )){
        return ((temperature-32)*(5/9));
    }
    else{
        console.log("invalid selection");
    }
}
//celcius to farenheit
 let tempAfterConversion1 = temperatureConversion(conversion1);
 console.log("Farenheit to Celcius conversion is : " +tempAfterConversion1);

//farenheit to celcius
let tempAfterConversion2 = temperatureConversion(conversion2);
console.log("Celcius to Farenheit conversion is : " +tempAfterConversion2);