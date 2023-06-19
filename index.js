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

function numero(x){
    if(x > 20){
        if(x < 100){
            return true
        }
        else if( x < 400){
            return true
        }
    }
}

console.log(numero(21))
console.log(numero(1))



