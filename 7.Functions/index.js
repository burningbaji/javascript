import chalk from "chalk";
//--------------------------
console.log("Hi");
console.log("hey!");
console.log(chalk.blue("hello"));
console.log(chalk.bgRed("javascript"));

function myName() {
    console.log("shaik");
    console.log("baji");
    
}
myName();
//---------------------
function addition 
(firstValue , secondValue)
{

    console.log("addition of the two numbers");
    console.log(chalk.bgRed(firstValue));
    console.log(chalk.bgYellow(secondValue));
    const output = firstValue + secondValue;

    console.log(chalk.white(output));
}    

addition(999 , 8888);

function subtraction
(firstValue , secondValue)
{
    console.log("subtraction of the two numbers");
    console.log(chalk.bgMagenta(firstValue));
    console.log(chalk.bgCyan(secondValue));

    const output = 
    firstValue - secondValue;

    console.log(chalk.white(output));

}

    subtraction (99999,8888);


    function Division 
    (firstValue , secondValue)
    {
    
        console.log("Division of the two numbers");
        console.log(chalk.bgRed(firstValue));
        console.log(chalk.bgYellow(secondValue));
        const output = firstValue / secondValue;
    
        console.log(chalk.white(output));
    }    
    
    Division(999 , 8888);

    function multy 
    (firstValue , secondValue)
    {
    
        console.log("multy of the two numbers");
        console.log(chalk.bgRed(firstValue));
        console.log(chalk.bgYellow(secondValue));
        const output = firstValue * secondValue;
    
        console.log(chalk.white(output));
    }    
    
    multy(999 , 8888);

    function modulo 
    (firstValue , secondValue)
    {
    
        console.log("modulo of the two numbers");
        console.log(chalk.bgRed(firstValue));
        console.log(chalk.bgYellow(secondValue));
        const output = firstValue % secondValue;
    
        console.log(chalk.white(output));
    }    
    
    modulo(999 , 8888);