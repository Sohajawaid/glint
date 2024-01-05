//chapter 1

alert("firstName")
alert("lastName")
alert("Email")
alert("phoneNumber")
alert("pasword")
alert(" you learning java script")
//chapter 2
var firstName = "saboor"
console.log (firstName)
 var teamName = "Ragra  xl"
 console.log(teamName)

 var bestWomen = "saboorAli"
 console.log(bestWomen)

 //chapter3
 var caseQty = "144"
 var num = "9"
 var marks = 74
 marks = +2;
 var merchTotal = 100;
 var shippingCharge = 10;
 var orderTotal = merchTotal + shippingCharge;
 console.log(orderTotal)

 //chapter 4
 var productCost = 3.45;
 var nameOfband;
 var topi = 250;
 var firstNameLastName = "sarashah"

 //legalname
 //personname
//  product_cost
// person
// person_10

 //illegal
//  person name 
//  10 person
//  product - cost

 //chapter 5
 //modulus oprater = "%"
 var number = 20%6;
 console.log(number)

 //chapter 6 
 x = x + 1;
 var x = 100 ;
 var y = --x;
 console.log(y)

 var x = 50;
 var y = x++;
 console.log(y)

 var yy = 50;
 var z = --y;
 console.log(z)

 //chapter 7
 var calculateNum = 2+(2*6);
 console.log (calculateNum)

 var calculatedNum = (2+2)*6;
console.log(calculatedNum)
var calculatingNum = (2+2)*(4+2)
console.log(calculatingNum)
 var calculateNum= ((2+2)*4)+2;
 console.log (calculateNum)

 var a = (2+2)*(4+10);
 console.log(a)

 var b = 2+2*4+10;
 console.log(b)
 var c = 4/2*4;
 console.log(c)
 
 //chapter 8
 var num = "2"+"2"
 console.log(num)
 alert("Hello"+"Dolly?")

 alert("33"+3);
 var a = "pakistan"
 var b = "zindabad"
 var c = (a+b)
 alert(c)

 //chapter 9
 var firstName = prompt("enterYourFirstName")
 console.log(firstName)
 
 var cuntryName = prompt('enteryourcuntryname')
 console.log(cuntryName)

 //chapter10
 var city = "karachi"
 if (city = "karachi"){
    console.log ("the city of lights")
 }
 //2.This is the first line of an if statement: if (x === y)
 var x = 13
 var y = 13
 var z = (x === y)
 if (x ===y){
    console.log(z)
 }
  var city = "10010"
  if(city = "karachi"){
    console.log("please write correct city")
  }

  //chapter 11
  var a = 10;
  var b = 11;
  var c = (a!==b)
  if(a!== b){
    console.log(c)
  }
   
  var num1 = 2;
  var num2 = 5;
  var result;
  if (num1 !== num2){
   result = num1 + num2;
   console.log(result)
  }
    var value1 = 10;
    var value2 = 5;
    if (value1 >= value2){
      console.log("the condition its true");
    } else{
      console.log("the condition its false");
    }
   var myVariable = 5;
if (myVariable !== 10) {
   myVariable = 20;
   console.log(myVariable);
}

var enterName = prompt("what is your first name?");
var anotherName = "Shummi";
if (enterName !== anotherName){
   alert("No match");
}

//chapter 12
var variable1 = 10;
var variable2 = 5;
if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is less than Variable2");
}
var marks = parseFloat(prompt("Enter your marks:"));


if (isNaN(marks)) {
    alert("Please enter a valid number for marks.");
} else {
    var percentage = (marks / 100) * 100;
    if (percentage >= 90) {
        console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: A");
    } else if (percentage >= 80) {
        console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: B");
    } else if (percentage >= 70) {
        console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: C");
    } else if (percentage >= 60) {
       console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: D");
    } else {
        console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: F");
    }
}
  //chapter 15
  //Array
  //Array = []

   var arr = ["c"]
 console.log (arr)

var arr =["h","i","j","k"]
console.log(arr[2])

 var arr=["h","i","j","k","l","m","n","o"]
 arr.push("p")
console.log(arr)

 var sizes = ["S", "M", "XL", "XXL", "XXXL"]
 arr.splice(0,1)
console.log(sizes)

//chapter 16
var arr = ["hye","wellcome","hello"];
arr.push("world");
console.log(arr)

var arr = ["h","i","j","k"];
arr.pop();
console.log(arr)

var alphabet = ["h","i","j","k"];
alphabet.push(42)
console.log(alphabet)


//chapter 17-20
for(var i = 0;i< 10; i++){

    console.log(i)
}
 for(var i = 0;i <= 11; i++){
    console.log(i)
 }
 for (var count = 1; count < 101; count++) {
   console.log("Loop iteration #" + count);
}

   for (var index = 3; index > 0; index--) {
      console.log("Loop iteration #" + (4 - index));
  }
  var myArray = [1, 2, 3, 4, 5];
var numberOfElements = myArray.length;
console.log("Number of elements in the array: " + numberOfElements);


var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

//chapter 21
//var allLower = userInput.toLowerCase();

// var a = "HASHMANI"
// var letter = a.slice(0,1);
// letter = letter .toupperCase();

// var otherletters = a.slice(1);
// otherletters = otherletters .tolowerCase();
// var word = letter + otherletters;
// console.log(word);

//chapter 26
var originalNumber = 5.67;
var roundedNumber = Math.round(originalNumber);
console.log("Rounded number: " + roundedNumber);

var origNum = 5.67;
var roundNum = Math.ceil(origNum);
console.log("Rounded up number: " + roundNum);

var origNum = 5.67;
var roundNum = Math.floor(origNum);
console.log("Rounded down number: " + roundNum);

var originalNumber = 5.67;
var roundedNumber = Math.round(originalNumber);
console.log("Rounded number: " + roundedNumber);

var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);
console.log("Rounded number: " + roundedNumber);

//chapter 27
var a = Math.random();
console.log(a)

var a= Math.random();
 var b = (a*6) +1;
 var c = Math.floor(b);
 console.log(c)

 var a = Math.random();
 var b = Math.round(a)
console.log(a,b)

//chapter 28 to 29
var str = "456";
var intValue = Number(str);
console.log(intValue);

var str = "123";
var intValue = parseInt(str, 10); 
console.log(intValue); 

var str = "123.45";
var floatValue = parseFloat(str);
console.log(floatValue);

var num = 123;
var str = num.toString();
console.log(str);

//chapter 30
var num = 12.3456789; 
var newNum = num.toFixed(4).toString();
console.log(newNum);

var num = 12.345; 
num = Number(num.toFixed(2).toString());
console.log(num);

if (num.toFixed(2).toString().length > 4) {
  console.log("The number has more than 4 characters.");
} else {
  console.log("The number does not have more than 4 characters.");
}

//THE END...