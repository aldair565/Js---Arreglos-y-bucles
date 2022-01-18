//Exercise 1
//Part 1
var bankQueue = ["Sofia", "David", "Juan"];

console.log(bankQueue);

//Part 2
bankQueue.push("Sara", "Augustin");
bankQueue.shift();

console.log(bankQueue);

//Part 3
bankQueue.shift();
bankQueue.unshift("David", "Renata");
bankQueue.push("Elena");

console.log(bankQueue);

//Exercise 2
let symbol = ""
for (let i = 0; i <= 4; i++){
    for (let j = 0; j <= i; j++){
        symbol += "* ";
        console.log(symbol);
    }
    symbol += "\n";
    console.log(symbol);
}

//Exercise 3
//Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
var xValue = parseInt(prompt("Enter a number"));

while (xValue > 0){
    xValue -= 0.5;
    console.log(xValue);
}

//Print all the odd numbers between 1 - 100.
var oddNumbers = 1;
var residue = 1;

while (residue != 0 && oddNumbers < 100){
    residue = oddNumbers % 2;
    console.log(oddNumbers);
    oddNumbers += 2;
}

//Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
var bracketsNumber = 1;
var concatNumbers = "";
var nBrackets = parseInt(prompt("Enter n number"));

while (bracketsNumber <= nBrackets){
    concatNumbers += "[" + bracketsNumber + "] ";
    console.log(concatNumbers);
    bracketsNumber++;
}

//Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

var nSum = parseInt(prompt("Enter n number"));
var sum = 1;
var sumResult = 0;

while (sum <= nSum){
    sumResult += sum;
    sum++;
    console.log(sumResult);
}