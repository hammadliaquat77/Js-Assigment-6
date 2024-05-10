var a= 2
var b= 1

console.log(--a - --b + ++b + b--);
console.log(--a);
console.log(--a - --b);
console.log(--a - --b + ++b);
console.log(--a - --b + ++b  + b--);




var firstName = prompt("enter your first name")
var lastName =  prompt("enter your last name" )

var FullName = "Mr." + firstName + " " + lastName

console.log (FullName);



var heading = "Subject Total Marks Obtained Marks Percentage"

document.write("<h2>" + heading + "</h2>")


var subject1 = "English"
var subject2 = "Math"
var subject3 = "Science"

var total= 100

var obtainedMarks = 70 
var percentage = "70%"

var obtainedMarks1= 65
var percentage1 = "65%"

var obtainedMarks2 = 90
var percentage2 = "90%"

var totalMarks = "<h3>" + subject1 + " " + total +" " + obtainedMarks +  " " +  percentage +"</h3>"
var totalMarks1 = "<h3>" + subject2 + " " + total +" " + obtainedMarks1 +  " " +  percentage1 +"</h3>"
var totalMarks2 = "<h3>" + subject3 + " " + total +" " + obtainedMarks2 +  " " +  percentage2 +"</h3>"


document.write(totalMarks)
document.write(totalMarks1)
document.write(totalMarks2)

var num= 300
var num1= 225
var num2= "77%"


document.write( "<h3>" + num  + " " +  num1 + " " + num2 + "</h3>")


