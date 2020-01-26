
// require ./ means get from here
var mathLib = require('./myMath')


function sayHello() {

    console.log("Hello World");

}

function exc1() {
    //print numbers from 1 to 10 except the number 7
    for (var i = 1; i <= 10; i++) {
        if (i != 7) {
            console.log(i);
        }

    }

}
function exc2() {
    // print the number from 20 - 1 except for 7 and 13
    for (var i = 20; i > 0; i--) {
        if (i != 7 && i != 13) {
            console.log(i);
        }
    }
}


console.log("Hello World");

/* sayHello();
exc1();
exc2(); */

function homeWork() {
    var numbers = [23, 45, 23, 56, 2, -34, 8, 1, -12, 2, 123, 9045, 546, 34, -123];

    // 1 find the smaller
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var n = numbers[i];
        if (n < smallest) smallest = n;
    }
    console.log("The smallest number is:", smallest);

    // 2 the bigger
    var biggest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        var bigNum = numbers[i];
        if (bigNum > biggest) biggest = bigNum;
    }
    console.log("The biggest number is:", biggest);

    // 3 the sum of them all
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("The sum of all the numbers are:", sum);

    // 4 the multiplication of them all
    var multiply = 1;
    for (var i = 0; i < numbers.length; i++) {
        multiply *= numbers[i]; 
    }
    console.log("Multiplying all the numbers equals:", multiply);

    // 5 non-positive numbers (lower than 0)
    var negNums = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0 ) {
            negNums.push(numbers[i]);
        }
        
    }
    console.log("The negative numbers lower than 0 are:", negNums);

    // 6 print the even numbers
    var evenNums = [];    
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0 ) {
            evenNums.push(numbers[i]);
        }
        
    }
    console.log("The even numbers are:", evenNums);

     // 6 print the odd numbers
     var oddNums = [];    
     for (var i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 !== 0 ) {
             oddNums.push(numbers[i]);
         }
         
     }
     console.log("The odd numbers are:", oddNums);
}


mathLib.funMath();

var res = mathLib.sum(21, 21);
console.log("result:", res);

var bigger = mathLib.greater(788555554552, 5894575);
console.log("bigger:", bigger);

var smaller = mathLib.smaller(0, -1);
console.log("smaller:", smaller);

var r1 = mathLib.division(20, 5);
console.log(r1);

var r2 = mathLib.division(5, 0);
console.log(r2);

var r4 = mathLib.isEven(54);
console.log(r4);

var r5 = mathLib.isEven(5);
console.log(r5);

homeWork();



