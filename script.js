// Task 1: Employee Login System

let username = prompt("Enter your username")
let password = prompt("Enter your password")

if (username === "Naveen" && password === "12345") {
    alert("Login Successful");
} 
else 
    {
    alert("Invalid Username or Password");
}



// Task 2: E-Commerce Discount

let amount = 6500;
let finalAmount;

if (amount >= 5000){
    let discount = (amount * 20) / 100;
    finalAmount = amount - discount;
    console.log("20% Disount Applied");
    }
     else
    {
    finalAmount = amount;
    console.log("No Disount");
    }
    console.log("finalAmount : "+ finalAmount);

//output: 20% Disount Applied
 //           finalAmount : 5200



// Task 3: ATM Withdrawal

let balance = 10000;
let withdraw = 4000;

if(withdraw <= balance){
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
}else{
    console.log("Insufficient Balance");
}
//output :
// Transaction Success
// Balance: 6000.



//Task 4: Student Grade System

let mark = 87;

if(mark >= 90){
    console.log("Grade A");
}
else if(mark >=80){
    console.log("Grade B");
}
else if(mark >=70){
    console.log("Grade C");
}
else{
    console.log("Fail");
}
//output : Grade B



// Task 5: Traffic Signal

let signal="green";

switch(signal){

case "red":
console.log("Stop");
break;

case "yellow":
console.log("Ready");
break;

case "green":
console.log("Go");
break;

default:
console.log("Invalid");
}
// Output : Go



//Task 6: Online Shopping Delivery Charge 

let orderAmount = 750;
let delivery;

if (orderAmount >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

let total = orderAmount + delivery;

console.log("Order Amount : " + orderAmount);
console.log("Delivery : " + delivery);
console.log("Total : " + total);

//Output:
// Order Amount : 750
// Delivery : 80
// Total : 830



// Task 7: User Age Verification

let age = Number(prompt("Enter your age:"));

if(age < 18){
    console.log("Not Eligible");
}
else{
    console.log("Eligible");
    
}
//output: Eligible



// Task 8: Find Largest Number

let a = 10;
let b = 20;
let c = 15;

if(a > b && a > c){
    console.log(a);

}
else if(b > a && b > c){
    console.log(b);

}
else{
    console.log(c);

}//output : 20



// Task 9: Mobile Password

let pin = prompt("Enter your PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}
//Output:1234



//Task 10: Product Stock

let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}
//output : Out of Stock



//Task 11: Employee Salary Bonus

let salary = 40000;
let bonus;

if(salary > 50000){
    bonus = 10000;
}

else if (salary > 30000){
    bonus = 5000;
}
else
    {
    bonus = 2000;
}
console.log("Salary : " + salary);
console.log("Bonus : " + bonus);

//output:Salary : 40000
//       Bonus : 5000



//Task 12: Electricity Bill

let units = 150;
let bill;

if(units <= 100){
    bill = units * 2;
}
else if (units <= 200){
    bill = units * 4;

}
else{
    bill = units * 6;
}

console.log("Units : " + units);
console.log("Total Bill : ₹" + bill)

//output :Units : 150
//        Total Bill : ₹600



//Task 13: Movie Ticket Booking

let age = 20;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;

} else if (age <= 18) {
    ticketPrice = 100;

} else {
    ticketPrice = 200;
}

console.log("Age : " + age);
console.log("Ticket Price : " + ticketPrice);

//output: Age : 20
//        Ticket Price : 200



// Task 14: Hospital Token System

let type = "Emergency";

switch(type){
    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Type");
}  
// output : Token 1



// Task 15: Company Attendance

let status = "Present";

switch (status) {
    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid Status");

}
//output: Working



// Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

if(total > 1000){
    discount = total * 10 / 100;
} 
let finalAmount = total - discount;

    console.log( "Total :" + total);
    console.log("Discount :" + discount)
    console.log("Final Amount :" + finalAmount);

//output :Total : 1050
//        Discount : 105
//        Final Amount : 945



//Task 17: Array Task --using for loop

let products = ["Laptop", "Mouse", "Keyboard","Monitor"];

for(let i = 0; i < products.length ; i++){
    console.log((i+1) + "." + products[i]);
}
// output:
// 1.Laptop
// 2.Mouse
// 3.Keyboard
// 4.Monitor



//Task 18: Employee Database — Using for...in

let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};

for(let key in employee){
    console.log(employee[key]);
}
//output:
// Rahul
// Developer
// 50000



// Task 19 : Type Casting

let a = Number("100");
let b = Boolean("true");
let c = String(200);

console.log(a);
console.log(b);
console.log(c);

//output :100
//        true
//        "200"



// Task 20: Banking Menu

let choice = 2;

switch (choice) {
    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw")
        break;

    case 3:  
    console.log("Balance")
        break;  

    case 4:
        console.log("Exit")
        break;    

    default:
        console.log("Invalid Choice")
    
}
//output : Withdraw


//Mini Project
// Employee Management System

let employees = [
    {
        name: "Naveen",
        role: "Developer",
        salary: 50000,
        attendance: "Present"
    },
    {
        name: "Vasanth",
        role: "Tester",
        salary: 40000,
        attendance: "Leave"
    }
];

let choice = 2;

switch (choice) {

    case 1:
        console.log("Add Employee");
        break;

    case 2:
        // Show Employee Details
        for (let employee of employees) {
            console.log(`Name: ${employee.name}`);
            console.log(`Role: ${employee.role}`);
            console.log(`Salary: ₹${employee.salary}`);
            console.log(`Attendance: ${employee.attendance}`);
            
        }
        break;

    case 3:
        // Calculate Bonus
        for (let employee of employees) {
            if (employee.salary > 30000) {
                console.log(`${employee.name} Bonus: ₹5000`);
            } else {
                console.log(`${employee.name} Bonus: ₹2000`);
            }
        }
        break;

    case 4:
        // Check Attendance
        for (let employee of employees) {
            if (employee.attendance === "Present") {
                console.log(`${employee.name}: Working`);
            } else {
                console.log(`${employee.name}: Leave`);
            }
        }
        break;

    case 5:
        // Print Salary
        for (let employee of employees) {
            console.log(`${employee.name} Salary: ₹${employee.salary}`);
        }
        break;

    case 6:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}

