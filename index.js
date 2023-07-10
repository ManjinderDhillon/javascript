// Traversal in Array

// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];

// console.log(myFriend);
// console.log(myFriend[1]);

// Check the of lenght of an array
// console.log(myFriend.length);

// last element of an array
// console.log(myFriend[myFriend.length - 1]);

// use for loop to navigate
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// for (i = 0; i < myFriend.length; i++) {
//   console.log(myFriend[i]);
// }

// After ESs we use for..in and for..of loop
// for in loop for index number

// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// for (let elements in myFriend) {
//   console.log(elements);
// }

// for of loop for values
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// for (let elements of myFriend) {
//   console.log(elements);
// }

// forEach loop
//  calls a function for each element of an array
// triditional function
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// myFriend.forEach(function (element, index, array) {
//   console.log(element);
// });

// fatArraow function
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// myFriend.forEach((element, index, array) => {
//   console.log(element);
// });

//
// // Searching and filter in an Array
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// console.log(myFriend.indexOf("Aman"));

// console.log(myFriend.indexOf("Aman", 2));

// last index of
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// console.log(myFriend.lastIndexOf("Rohit"));
// console.log(myFriend.lastIndexOf("Rohit", 2));

// Array.prototype.includes()
// var myFriend = ["Ramesh", "Aman", "Raman", "Rohit"];
// console.log(myFriend.includes("Rohit"));

// Array.prototype.find()
// return one element
// const prices = [100, 200, 300, 350, 400, 500, 550, 600];
// prices < 400
// const findelement = prices.find((element) => element);
// console.log(findelement);

// Array.prototype.filter()
// Returns new array containing all element ,filtering for
// Returns emepty array if cindition is false
// const prices = [100, 200, 300, 350, 400, 500, 550, 600];
// prices < 400
// const findPrices = prices.filter((element) => {
//   return element < 400;
// });
// console.log(findPrices);

// Sorting of an Array
// const months = ["March", "Jan", "Feb", "Dec", "Nov"];
// console.log(months.sort());

// const number = [1, 30, 4, 21, 100000, 99];
// console.log(number.sort());

// CRUD In Array
// push()
// adds one element at the end of an array
// Returns new lenth of an Array
// we can add multiple values
// const animals = ["pig", "sheep", "goat"];
// animals.push("chicken");
// animals.push("chicken", "cow", "cat");
// console.log(animals);

// unshift()
// adds element at the starting of an array
// const animals = ["pig", "sheep", "goat"];
// animals.unshift("cat");
// console.log(animals);

// const number = [1, 2, 3, 5];
// const add = number.unshift(4, 6);
// console.log(add);

// Array.prototype.pop()
// removes the last element of an Array
// chnages the lenght of an Array

// const plants = ["broccoli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift()
// remove the first element of an array
// const plants = ["broccoli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// Array.prototype.splice
// adds and removes the element from an Array
// Question

// Add Dec at the end of an Array
// what is the return value of splice method
// update march to March
// delete june from an Array

// const months = ["jan", "march", "April", "june", "july"];

// sol 1:
// const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);

// sol 1:
// console.log(newMonth);

// sol 3:
// const months = ["jan", "march", "April", "june", "july"];
// const index = months.indexOf("march");
// if (index != -1) {
//   months.splice(index, 1, "March");
//   console.log(months);
// } else {
//   console.log("Not Found");
// }

// sol 4:
// const months = ["jan", "march", "April", "june", "july"];
// const index = months.indexOf("june");
// if (index != -1) {
//   months.splice(index, 1);
//   console.log(months);
// } else {
//   console.log("Not Found");
// }

// Array.prototype.map()
// let newArray = arr.map(callback(currentValue[, index[,array]]){
//     return element for newArray,after executing something
// }[, thisArg])

// Returns new Array containing the result of calling a function
// returns response in true false
// Returns newArray
// chainable
// const array = [1, 4, 9, 16, 25];
// let newArray = array.map((element, index, array) => {
//   return element > 12;
// });
// console.log(newArray);

// const array = [1, 4, 9, 16, 25];
// const newArray = array.map((element, index, array) => {
//   return `index no = ${index} and the value id ${element} belongs to ${array}`;
// });
// console.log(newArray);

// Question
// 1 find the squre root of each element in an Array
// 2 multiply each element by 2 and return only those elements which are greater than 10

//  sol 1
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((element) => {
//   return Math.sqrt(element);
// });
// console.log(arrSqr);

// sol 2
// let arr = [2, 3, 4, 6, 8];
// const mul = arr
//   .map((element) => {
//     return element * 2;
//   })
//   .filter((element) => {
//     return element > 10;
//   });
// console.log(mul);

// Reduce()
// Convert a 2D and 3D array into a single dimensional Array
// when we need single value answer
// The reduce function takes four arguments:
// Accumulator
// Current Value
// Current Index
// Source Array

// let array = [2, 5, 8, 5];
// const sum = array.reduce((accumulator, currentElement, index, array) => {
//   return (accumulator += currentElement);
// });
// console.log(sum);

// let arr = [2, 3, 4, 6, 8];
// const mul = arr
//   .map((element) => {
//     return element * 2;
//   })
//   .filter((element) => {
//     return element > 10;
//   })
//   .reduce((accumulator, element) => {
//     return (accumulator += element);
//   });
// console.log(mul);

// Question
// How to flatten an Array
// Convert 2d and 3d array into one dimensional array

// const arrr = [
//   ["Zone_1", "Zone_2"],
//   ["Zone_3", "Zone_4"],
//   ["Zone_5", "Zone_6"],
//   ["Zone_7", "Zone_8"],
// ];

// let flatArr = arrr.reduce((accumu, element) => {
//   return accumu.concat(element);
// });
// console.log(flatArr);

// String
// const namee = "Manjindr";
// console.log(namee);

// String,prototype.lenght
// const namee = "Manjinder Singh";
// console.log(namee.length);

// Escape Character
// let anySentence = 'We are the so-called "vikings" from the north';
// console.log(anySentence);

// Alternative qoutes
// let anySentence = 'We are the so-called "vikings" from the north';
// console.log(anySentence);

// Finding a String in a String
// const bioData = "My name is Manjinder singh";
// console.log(bioData.indexOf("Manjinder"));

// Searching a String in a String
// const bioData = "My name is Manjinder singh";
// console.log(bioData.search("Manjinder"));

// Extracting String Parts

// There are 3 methods for extracting a part of a string
// slice(start,end)
// substring(start,end)
// substr(start,length)

// slice()
// Extracts a part of a string and returns the extracted part in a new string.
// takes two perameter: start and end
// end is not included

// var str = "Apple, Bnanana, Kiwi";
// let res = str.slice(0, 4);
// console.log(res);

// var str = "Apple, Bnanana, Kiwi";
// let rs = str.slice(7, -2);
// console.log(rs);

// Question
// Display only 280 chracters of a String like the one used in Twitter

// let myTweets =
//   'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
// const actual = myTweets.slice(0, 280);
// console.log(actual);
// console.log(actual.length);

// substring()
// similer to slice()
// The difference is that substring() cannot accept negative indexes

// var str = "Apple, Banana,kiwi";
// console.log(str.substring(0, 4));

// var str = "Apple, Banana,kiwi";
// console.log(str.substring(7, -2));

// substr()
// substr() is similar to slice()
// difference is second perameter specifies the lentgh of extracted part
// var str = "Apple, Banana,kiwi";
// console.log(str.substr(0, 4));
// let res = str.substr(-4);
// console.log(res);

// Replacing String Content()
// String.prototype.replace(searchFor,replaceWith)
// the replace method replaces the specified value with another value in a string
// returns new string

// let myBioData = `I am Manjinder  Singh dhillon`;
// const replaceData = myBioData.replace("dhillon", "Dhillon");
// console.log(replaceData);

// Extracting String Chracters

// charAt(position)
// charCodeAt(position)
// property access[]

// let str = "HELLO WORLD";
// console.log(str.charAt(3));

// let str = "HELLO WORLD";
// console.log(str.charCodeAt(3));

// property Access
// var str = "HELLO WORLD";
// console.log(str[2]);

// Question
// Return the unicode of last character in a string

// let str = "HELLO WORLD";
// const lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// Other useful methods
// let myName = "manjinder singh";
// console.log(myName.toLocaleUpperCase());
// console.log(myName.toLowerCase());

// conacat()
// joins two or more strings
// let fName = "Manjinder";
// let lName = "Dhillon";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

// string.trim()
// removes the whitespaces from both sides of a string

// var str = "          Hellow world";
// console.log(str);
// console.log(str.trim());

// Converting a strign into an array
// split()

// let txt = "a,b, | c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));
