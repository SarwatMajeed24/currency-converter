import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.magentaBright.bold("\n\t'''''''''''''''''''''''''''''''''''''''''''''''"));
console.log(chalk.green.bold.underline("\t\tYou are using currency converter\n"));
console.log(chalk.magentaBright.bold("\t'''''''''''''''''''''''''''''''''''''''''''''''"));

const currencyRates : any = {
       
    EUR: 1,      // Base currency
    PKR: 301.12,
    RMB: 7.85,
    SAR: 4.07,
    TRY: 34.75,
    GBP: 0.86,
    INR: 90.37,    
    JPY: 164.47,
    USD: 1.08,
    KWD: 0.33
}
async function convertCurrency() {
    while (true){
        let options = await inquirer.prompt({
            name:"select",
            type: "list",
            message: (chalk.yellowBright("\nSelect an option")),
            choices: ["currency convert", "exit"]
        });
 if (options.select === "exit") {                                         // Exit the program
 console.log(chalk.yellowBright.bold("\t--------------------------------------------------------"));
 console.log(chalk.magentaBright("\t\tThank you for using currency converter"));
 console.log(chalk.yellowBright.bold("\t--------------------------------------------------------"));
 process.exit();
 } 
        if (options.select = "currency convert"){
        let currencyConverter = await inquirer.prompt(
    [
        {
    name: "from",
    message: (chalk.greenBright("\nEnter from Currency")),
    type: "list",
    choices: [ "EUR" , "PKR" , "RMB" , "SAR" , "TRY" , "GBP" , "INR" , "JPY" , "USD" , "KWD"],
         },
         {
            name: "to",
            message: (chalk.yellow("\nEnter to Currency:")),
            type: "list",
            choices: [ "EUR" , "PKR" , "RMB" , "SAR" , "TRY" , "GBP" , "INR" , "JPY" , "USD" , "KWD"],
                 },
                 {
                    name: "amount",
                    message: (chalk.magentaBright("\nEnter your Amount:")),
                    type: "number",
                         },
    ]
);

let from_Currency_Converter = currencyConverter.from
let to_Currency_Converter = currencyConverter.to

let from_Coverter_Amount = currencyRates [from_Currency_Converter];
let to_Converter_Amount =  currencyRates [to_Currency_Converter]; 

let myAmount = currencyConverter.amount

let base_converted_Amount = myAmount / from_Coverter_Amount   // uSD base currency
let final_converted_Amount = base_converted_Amount * to_Converter_Amount
console.log(chalk.red.bold(`\n\t\tActual Converted Value: ${final_converted_Amount}`));

let tofixed_convertedAmount = final_converted_Amount.toFixed(2);
console.log(chalk.yellow.bold(`\t\ttofixedvlue:${tofixed_convertedAmount}`))

let roundoff_convertedAmount = Math.round(final_converted_Amount)
console.log(chalk.green.bold(`\t\tRoundoff value: ${roundoff_convertedAmount}`));
        }

    }
}

convertCurrency();

