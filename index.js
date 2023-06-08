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

