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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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








