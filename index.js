// // //1.1. Write a JavaScript program to display the current day and time in the following format.  
// // Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38
// // Click me to see the solution

// const date = new Date()
// const hour = date.getHours()
// const minute = date.getMinutes() 
// const second = date.getSeconds()
// const day = date.getDay()




// switch(day){
//     case 0:
//        switchDay = "sunday"
//         break;
//     case 1:
//         switchDay = "monday"
//         break;
//     case 2:
//         switchDay = "tuesday"
//          break;
//     case 3:
//         switchDay = "wednesday"
//         break;
//     case 4:
//         switchDay = "thursday"
//         break;
//     case 5:
//         switchDay = "friday"
//         break;
//     case 6:
//         switchDay = "saturday"
//         break;
//     default:
//         "sorry, bad info"        
// }

// console.log(`Today is ${switchDay}`)

// const timer = `Current time is : ${hour > 12 ? hour -12 +" PM" : hour + "AM"} : ${minute} : ${second}`

// console.log(timer)

// 2. Write a JavaScript program to print the current window contents.  
// Click me to see the solution


// function printer(){window.print()}

// printer()

// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Click me to see the solution

// const date = new Date()
// console.log(date.toLocaleDateString())

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
// Click me to see the solution


// const a = 5;
// const b = 6;
// const c = 7;

// const p = (a + b + c)/2


// const pole = Math.sqrt(p*(p-a)*(p-b)*(p-c))

// console.log(pole)

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  
// Click me to see the solution

// const divek = document.querySelector("div");

// setInterval(function () {
//     divek.style.transform = 'rotate(90deg)'
// }, 1000);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
// Click me to see the solution

// const outputDiv = document.querySelector(".outputDiv")
// const inputValue = document.querySelector("input")


// inputValue.addEventListener("change", handleFunction = (e) => {
//     e.target.value % 4 === 0 ? 
//     outputDiv.innerHTML = "rok jest przestępny" :
//     outputDiv.innerHTML = "rok nie jest przestępny"  
// })

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
// Click me to see the solution

// let arrayWithYears = []
// for(let i = 2014; i< 2050 ; i++){
//     const dayToCheck = new Date(`${i}-01-01`)
//     if(dayToCheck.getDay() === 0){
//         arrayWithYears.push(dayToCheck)
//     }
//     console.log(arrayWithYears)
// }

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// Click me to see the solution.

// const userNumber = document.querySelector("input")
// const outputDiv = document.querySelector(".outputDiv")

// const randomNumber = Math.round(Math.random()*20)
// console.log(randomNumber)


// const handleNumber = (event) => {
//     const liczba = event.target.value

//     if (liczba > randomNumber){
//     outputDiv.textContent = "podana liczba jest za duża"
//     }
//     else if (liczba < randomNumber){
//     outputDiv.textContent = "podana liczba jest za mała"
//     }
//     else {
//         outputDiv.textContent = "trafiłeś"
//     }
// }

// userNumber.addEventListener("input", handleNumber)

// 9. Write a JavaScript program to calculate the days left before Christmas.  
// Click me to see the solution

// const presentDate = new Date()
// const christmasTime = new Date("12/24/2023 12:00:00")

// console.log(presentDate)
// console.log(christmasTime)

// const subtractTime = christmasTime - presentDate
// console.log(subtractTime)

// const result = Math.round((((subtractTime)/1000)/3600)/24)
// console.log(result)

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 


// function someFunction(){
//     let num1 = document.querySelector('.number1').value
//     let num2 = document.querySelector('.number2').value
//     document.getElementById('outputDiv').textContent = num1 * num2
//     console.log(input1JS)
//     console.log(input2JS)
// }

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// function someFunction(){
//     num1 = document.querySelector('.number1').value 
//     document.getElementById('outputDiv').textContent = (num1 * 1.8)+32
// }

// 12. Write a JavaScript program to get the website URL (loading page).  
// Click me to see the solution

// document.getElementById('outputDiv').textContent = document.URL

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  

// function someFunction () {
    
//     let userVariable = document.getElementById('number1').value

//     document.getElementById('outputDiv').textContent = 
//     `zmienna użytkownika nazywa się ${userVariable}`
// }

// 14. Write a JavaScript exercise to get the filename extension.  
// Click me to see the solution

// function someFunction(){
//     const userVariable = document.getElementById('number1').value
//     const convertVariable = userVariable.split('.')
//     document.getElementById('outputDiv').textContent = convertVariable[1]

// }

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  
// Click me to see the solution

// function someFunction(){
//     const userVariable = document.getElementById('number1').value
    
//     let result = userVariable - 13 > 13 ? Math.abs((userVariable-13)*2) : userVariable - 13


//     document.getElementById('outputDiv').textContent = result

// }

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  
// Click me to see the solution
    
// let result = 0

// function someFunction () {
    
//     let userVariable1 = document.getElementById('number1').value
//     let userVariable2 = document.getElementById('number2').value

//     if(userVariable1 === userVariable2){
//          result = (parseInt(userVariable1)+parseInt(userVariable2))*3
//     }
//     else{ 
//         result = parseInt(userVariable1)+parseInt(userVariable2)
//     }

//     document.getElementById('outputDiv').textContent = result
// }

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  
// Click me to see the solution

// function someFunction(){
//     const userVariable = document.getElementById('number1').value
    
//     let result = userVariable - 19 > 19 ? Math.abs((userVariable-19)*3) : Math.abs(userVariable - 19)


//     document.getElementById('outputDiv').textContent = result

// }

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
// Click me to see the solution

// function pair(x,y) {
//     return((x == 50)||(y == 50)||(x + y == 50))
// }

// console.log(pair(50,0))
// console.log(pair(0,50))
// console.log(pair(25,25))
// console.log(pair(5,5))

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
// Click me to see the solution

// function numero(x){
//     if(x > 20){
//         if(x < 100){
//             return console.log("20<x<100")
//         }
//         else if( x < 400){
//             return console.log("100<x<400")
//         }
//         else {
//             console.log("za duza liczba")
//         }
//     }
//     else {
//         console.log("za mala liczba liczba")
//     }
// }

// console.log(numero(101))

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
// Click me to see the solution

// function checkValues (x,y){
//     return ((x > 0 && y < 0) || (x < 0 && y > 0))
// }

// console.log(checkValues(1,2))
// console.log(checkValues(1,-1))
// console.log(checkValues(-1,6))

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

// function addPy(text){
//     if(text.slice(0,2) === "Py"){
//         return text
//     }
//     else {
//         return "Py"+text
//     }
// }

// console.log(addPy("ka"))

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

// function stringModify(text,n){
//     return text.slice(0,n) + text.slice(n+1)
// }

// console.log(stringModify("karamba",3))

// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

// function letterChange(text){
//     const textModified = text.slice(1,-1)
//     const firstLetter = text.slice(0,1)
//     const lastLetter = text.slice(-1)
//     return lastLetter+textModified+firstLetter
// }

// console.log(letterChange("kaktus"))

// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

// function addLetter(text){
//     const letter  = text.charAt(0);
//     return letter + text + letter
// }

// console.log(addLetter("abcdefghijklmnoprstuvwxyz"))

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 

// function isMultiply(x){
//     return x % 3 === 0 && x % 7 === 0
// }

// console.log(isMultiply(42))

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  

// function someProgram(text) {
//     if(text.length > 3){
//     const textToAdd = text.slice(-3)
//     return textToAdd + text + textToAdd}
//     else {
//         console.log("tekst za krótki")
//     }
// }

// console.log(someProgram("abcdefghijklmnopqrstuvwxyz"))

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  


// function someProgram(text){
//     return text.slice(0,4) === "Java"
// }

// console.log(someProgram("Java"))

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

// function someProgram(x, y) {
//     return (x < 49 || x > 99)||(x < 49 || y > 99)
// }

// console.log(someProgram(50, 551))

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  

// function someProgram(x, y, z) {
//     return (x > 49 && x < 99)||(y > 49 && y < 99)||(z > 49 && z < 99)
// }

// console.log(someProgram(5, 50, 5))

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

// function scriptCheck(text){
//     return text.substr(4,6) === "script"
// }

// console.log(scriptCheck("aaaaaaaaa"))
// console.log(scriptCheck("1234script"))

// 31. Write a JavaScript program to find the largest of three given integers.  

// function theBiggest(a,b,c){
//     result = a
//     if(b > result){
//         result = b
//     }
//     if(c > result){
//         result = c
//     }
//     return result
// }

// console.log(theBiggest(5,22,3))

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
// Click me to see the solution

// function theClosestValue(a,b){
//     Math.abs(100 - a) < Math.abs(100 - b) ? console.log(`${a} jest bliżej`) : console.log(`${b} jest bliżej`)
// }


// theClosestValue(100,99)

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

// function twoNumbers (x,y) {
//     return ((x >=40 && x <=60)||(x >=70 && x <= 100)) && ((y >=40 && y <=60)||(y >=70 && y <= 100))
// }

// console.log(twoNumbers(69,80))

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

// function twoNumber(x,y){
//     if((x >=40 && x <=60) && (y >=40 && y <=60))
//     {return x > y ? x : y}
//     else {
//      return "zle liczby"}
// }

// console.log(twoNumber(15,55))

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

// function checking(x,y){
//     for(let i = 1; i< 4; i++){
//         if(x === y[i]){
//             return `wystepuje na pozycji ${i+1}`
//         }
//     }
// }
// console.log(checking("a","bbbaaabbb"))


// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

// function lastDigit(x, y, z){
//     if(x > 0){
//         console.log(x.toString().slice(-1) )
//         console.log(y.toString().slice(-1) )
//         console.log(z.toString().slice(-1) )
//         console.log((x.toString().slice(-1) == y.toString().slice(-1) == z.toString().slice(-1)))

//        return (x.toString().slice(-1) == y.toString().slice(-1)) && (x.toString().slice(-1) == z.toString().slice(-1))
//     }
// }

// console.log(lastDigit(125553, 1234654643, 352425464654643))

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

// function fromLowerToUpper(text){
//     return text.length < 3 ? text.toUpperCase() : text.slice(0,3).toLowerCase() + text.slice(3)
// }

// console.log(fromLowerToUpper("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))

// 38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.  

// function marks (nums){
    
//     let result = 0
//     for(let num of nums){
//         result += num
//         console.log(result)
//     };
//     if(result >= 90){
//            return "A+"
//     }
//     else return "za malo pkt"
// }

// console.log(marks([1,2,3,50]))

// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

// function sumOf(a,b){
//     return a + b >= 50 && a + b <=80 ? 65 : 80
// }

// console.log(sumOf(80,4))

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

// function difference(a,b){
//     return (a === 8 || b === 8) || Math.abs(a - b) === 8 
// }

// console.log(difference(-4,4))

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

// function threeNumbers(a,b,c){
//     if(a === b && a === c){
//         return 30
//     }
//     if(a === b || a === c ||  b === c){
//         return 40
//     }
//     else {
//         return 20
//     }
// }

// console.log(threeNumbers(1,1,1))

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// function strictOrSoftMode(a,b,c){
//     if(c > b && b > a){
//         return "strict mode"
//     }
//     if(c > b)
//         return "soft mode"
//     else 
//         return "nie rośnie"
//     }

//     console.log(strictOrSoftMode(3,1,1))

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. 

// function sameDigit(a,b,c) {
//     if(a > 0 && b > 0 && c > 0){
//      if( a.toString().slice(-1) === b.toString().slice(-1) || a.toString().slice(-1) === c.toString().slice(-1) || b.toString().slice(-1) === c.toString().slice(-1))
//      return true
//     else {return "nie sa takie same"}
//     }
// }

// console.log(sameDigit(3,2,1))

// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.  

// const someNumbers =  [7,8,5,1,3]
// let sum = 0
// function sumChecking(nummers){
//     for(let nummer of nummers){
//         sum += nummer
//         console.log(sum)
//         if(sum > 20)
//         return
//     }
// }

// sumChecking(someNumbers)

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  

// function someCheckingProgram(a,b){
//     return (a === 15 || b === 15) || a + b === 15 
// }

// console.log(someCheckingProgram(1,13))

// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  

// function someProgram(a,b){
//     if(a > 0 && b > 0){
//         return ((a % 7 === 0 || a % 11 === 0) && (b % 7 !== 0 || b % 11 !== 0)) ||
//         ((a % 7 !== 0 || a % 11 !== 0) && (b % 7 === 0 || b % 11 === 0))
//     }
// }

// console.log(someProgram(7,7))

// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000


// function someProgram(x){
//     return x > 40 && x < 10_000 
// }

// console.log(someProgram(5555555))

// function reverseProgram(text){
//     let reversedText = []
//     for(letter of text){
//         reversedText.unshift(letter)
//     }
//     return reversedText.toString()
// }

// console.log(reverseProgram("abcdefghijklmnopqrstuvwxyz"))

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

// function caesarCode (text){
//     let myArray = []
//     for(let i = 0; i<text.length; i++){
//        myArray.push(text.charCodeAt(i+1))
//     }
//     let newArray = myArray.map(element => {
//         String.fromCharCode(element)
//     })
//     console.log(newArray)
//     let newString = newArray.join(" ")
//     console.log(newString)

    
// }

// console.log(caesarCode("sometext"))

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

// function splitterProgram (text) {
//     let newText = text.split(" ")
//     console.log(newText)
//     let newArray = []
//     let superNewText = newText.forEach(element => {
//         newArray.push(element[0].toUpperCase() + element.slice(1))

//     });
//     console.log(newArray)
//     return  newArray.toString()
// }

// console.log(splitterProgram("jakis tekscik tu jest"))

// 51. Write a JavaScript program to convert a given number into hours and minutes.  

// function hoursAndMinutes(x){
//     return `godzin ${Math.floor(x / 60)}, minut ${ x % 60}`
// }

// console.log(hoursAndMinutes(185))

// 52. Write a JavaScript program to convert letters of a given string alphabetically.  

// let convertedArray = []
//     for(let i=0; i<text.length; i++){
//         convertedArray.push(text.charCodeAt(i))

// function sortingProgram(text){
//         return text.split("").sort().join(" ")
// }

// console.log(sortingProgram("bgdfkajnbfja"))

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 


// function someProgram(text){
//     // return text.indexOf("   ")
//     return text.includes("   ")
// }

// console.log(someProgram("tral   alala"))

// 54. Write a JavaScript program to count the number of vowels in a given string.  

// const vowels = [ "a", "e", "i", "o", "u"]

// function someProgram(text){
//     return text.replace(/[^aeiou]/g,"").length}


// console.log(someProgram("adscbvuisdfgdf"))

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  


// function vowels(text){
//    return text.replace(/[p]/g,"").length === text.replace(/[t]/g,"").length
// }

// console.log(vowels("ptptptpptt"))

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  

// n1 = 80;
// n2 = 6;
  
// var div = Math.round(n1 / n2).toString(),
//         result_array = div.split("");

//     if (div >= 1000)
//        {
//         for (var i = div.length - 3; i > 0; i -= 3) 
//         {
//             result_array.splice(i, 0, ",");
//         }
//           result_array;
//     }
// console.log(result_array);

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  

// function copies(text,n){
//     return text.repeat(n)
// }

// console.log(copies("abrakadabra",3))

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 

// function lastThreeWords(text,n){
//     return text.slice(-3).repeat(n)
// }

// console.log(lastThreeWords("jakis tekscik", 4))

// 59. Write a JavaScript program to extract the first half of a even string.  

// function evenText(text){
//     if(text.length % 2 === 0)
//         return text.slice(0,text.length/2)
// }

// console.log(evenText("1234"))

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.  

// function deleteSomeLetter(text){
//     return text.slice(1,-1)
// }

// console.log(deleteSomeLetter("12345"))

// 61. Write a JavaScript program to concatenate two strings except for their first character.  

// function concatenateProgram(a,b){
//     return a.substring(1) + b.substring(1)
// }


// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  

// function threeLetters(text){
//     if(text.length >=3){
//         return text.slice(-3)+ text.slice(0,3)
//     }
// }

// console.log(threeLetters("111333"))

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  

// function threeLetters(text){
//     if(text.length >=3 && text.length % 2 !== 0){
//         return text.slice((text.length/2)-1.5,(text.length/2)+1.5)
//     }
// }

// console.log(threeLetters("123456789"))

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  

// function textConcatenate(a,b){
//     if(a.length > b.length){
//         return a.slice(0,b.length)
//     }
//     if(b.length > a.length){
//         return b.slice(0,a.length)
//     }
//     else return "are the same"
// }

// console.log(textConcatenate("aaa","bbbbbb"))

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  

// function scriptProgram(text){
//     return text.slice(-6) === "Script"
// }

// console.log(scriptProgram("tasertasefasScript"))

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  

// function citiesProgram(text){
//     return text.slice(0,3) === "New" || text.slice(0,3) === "Los"
// }

// console.log(citiesProgram("Los Angeles"))

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  

// function returnFunction(text){
//     return text.slice(0,1) === "P" || text.slice(-1) === "P" ? console.log(text.slice(1,-1)) : console.log(text)
// }

// returnFunction("asdfadfaawkoP")

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n

// const cutFunction = (text,n) => {
   
//     return text.length > n ? text.slice(n,-n) : "za krótki tekst"
// }

// console.log(cutFunction("abcdefghij",2))

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  

// const myArray = [1,2,3,4,5,7]
// const reduceProgram = myArray.reduce((a,b) => a + b, 0)

// console.log(reduceProgram)
// let sum = 0
// function someProgram(values){values.forEach(element => sum +=element); return sum}

// console.log(someProgram(myArray))

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  
// const myArray = [1,2,3,4,5,6]

// const rotateFunction = x => {
//     let newArray = []
//      x.map(element => newArray.unshift(element))
//      return newArray
// }

// console.log(rotateFunction(myArray))

// console.log(newArray = myArray.toReversed())


// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  

// const x = [2, 3, 4, 5, 1]

// const checkingFunction = x => { return (x[0] === 1) || (x[x.length-1] === 1) ? true : false}

// console.log(x[x.length-1])

// // console.log(checkingFunction(x))

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  

// someValues = [1,2,3,5,1]

// const integerArray = x => {
//     if(x.length > 3){
//       return x[0] === x[x.length-1] 
//     }     
// }

// console.log(integerArray(someValues))

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.  
// Click me to see the solution

// const ala = [1,2,3,5,6]

// const reversedArray = x => { return x.toReversed()}

// console.log(reversedArray(ala))

// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. 

// const someArray = [1,2,3,4,5]

// const someFunction = x => {
//     const maxValue = Math.max(...x)
 
//     return console.log(x.map(element => element = maxValue))
// }

// someFunction(someArray)

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  

// const array = [30,30]

// function someProgram(x){
//     x.map(element => {
//         if(element === 1){
//             console.log('zawiera 1')
//         }
//         if(element === 3){
//             console.log('element zawiera 3')
//         }
//     })
// }

// someProgram(array)

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  

// function someProgram(x){
//     return x.indexOf(1) == -1 || x.indexOf(3) == -1
// }

// console.log(someProgram(array))

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 

// function someProgram(x){
//     let a = x[0] 
//     let b = x[1]
    
//     return ((a === 30) && (b === 30)) || ((a === 40) && (b === 40))
// }

// console.log(someProgram(array))

// const someArray = [1,2]

// // 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  

// function swapProgram(x){
//     let y = [];
//     y.push(x[-1],x[0])
//     return y
// }

// console.log(swapProgram(someArray))