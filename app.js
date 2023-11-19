// chapter no 14

// Q1
// var studentnames = [];

// Q2
// var colors = ["blue", "red", "green", "black", "yellow"];

// Q3
// var numbers = [1,2,3,4,5,6];

// Q4
// var bool = [true,false];

// Q5
// var mixArr = ["Red", 4, true, "Blue", 2, false];

// console.log(mixArr)

// Q6
// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<h2>Qualification :</h2>")
// document.write("1) " + qualification[0] + "</br>" + "2) " + qualification[1] + "</br>" + "3) " + qualification[2] + "</br>" + "4) " + qualification[3] + "</br>" + "5) " + qualification[4] + "</br>" + "6) " + qualification[5] + "</br>" + "7) " + qualification[6] + "</br>" + "8) " + qualification[7]);

// Q7
// var names = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalmarks = 500;

// document.write("Scores of " + names[0] + " is " + scores[0] + ". Percentage : " + (scores[0] / totalmarks) * 100 + "% </br>");
// document.write("Scores of " + names[1] + " is " + scores[1] + ". Percentage : " + (scores[1] / totalmarks) * 100 + "% </br>");
// document.write("Scores of " + names[2] + " is " + scores[2] + ". Percentage : " + (scores[2] / totalmarks) * 100 + "% </br>");

// Q8
// a)
// var addcolor = prompt("Enter a color you want to add in Biginning of Array", " black ");
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.unshift(addcolor);
// document.write("A) UPDATED ARRAY : " + colors + "</br>")
// b)
// var addcolor = prompt("Enter a color you want to add in last of Array", " black ");
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.push(addcolor);
// document.write("B) UPDATED ARRAY : " + colors + "</br>")
// c)
// var addcolor1 = prompt("Enter a color you want to add in last of Array", " black ");
// var addcolor2 = prompt("Enter a color you want to add in last of Array", " black ");
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// var colors = [" blue ", " red ", " green"];
// colors.splice(0, 0, addcolor1, addcolor2);
// document.write("C) UPDATED ARRAY : " + colors + "</br>")
// d)
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.shift();
// document.write("D) UPDATED ARRAY : " + colors + "</br>")
// e)
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.pop();
// document.write("E) UPDATED ARRAY : " + colors + "</br>")
// f)
// var Index = +prompt("Which Index you want to palace the color", 0);
// var addcolor = prompt("Which color you want to add on given Index ", " black ");
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.splice(Index,0,addcolor);
// document.write("F) UPDATED ARRAY : " + colors + "</br>")
// g)
// var Index1 = +prompt("Which Index you want to delete the color", 0);
// var Index2 = +prompt("How many colors you want to delete", 1);
// var colors = [" blue ", " red ", " green"];
// document.write("PREVIOUS ARRAY : " + colors + "</br>")
// colors.splice(Index1,Index2);
// document.write("G) UPDATED ARRAY : " + colors + "</br>")

// Q9
// var scores = [320, 230, 480, 120];
// document.write("Scores of Students :" + scores + ".</br>");
// scores.sort();
// document.write("Ordered Scores of Students :" + scores + ".</br>");

// Q10
// var cities = [" Karachi ", " Lahore ", " Islamabad ", " Quetta ", " Peshawar "];
// document.write("Cities List :</br>" + cities + "</br>");
// var updatedArr = cities.slice(2, 5);
// document.write("Selected cities List :</br>" + updatedArr + "</br>");

// Q11
// var arr = ["This ", "is ", "my ", "cat"];
// document.write("<h2>Array</h2>" + arr);
// var newArr = arr.join(" ");
// document.write("<h2>String</h2>" + newArr);

// Q12
// var devices = ["Keyboard ", "Mouse ", "Printer ", "Monitor "];

// document.write("<h2>Devices : </h2>" + devices);
// document.write("<h3>Out :</h3></br>" + devices[0]);
// document.write("<h3>Out :</h3></br>" + devices[1]);
// document.write("<h3>Out :</h3></br>" + devices[2]);
// document.write("<h3>Out :</h3></br>" + devices[3]);

// Q13
// var devices = ["Keyboard ", "Mouse ", "Printer ", "Monitor "];

// document.write("<h2>Devices : </h2>" + devices);
// document.write("<h3>Out :</h3></br>" + devices[3]);
// document.write("<h3>Out :</h3></br>" + devices[2]);
// document.write("<h3>Out :</h3></br>" + devices[1]);
// document.write("<h3>Out :</h3></br>" + devices[0]);

// Q14
var devices = ["Apple ", "Samsung ", "Motorola ", "Nokia ", "Sony ", "Haier"];

document.write("<select>" +
    "<option>" + devices[0] + "</option>" +
    "<option>" + devices[1] + "</option>" +
    "<option>" + devices[2] + "</option>" +
    "<option>" + devices[3] + "</option>" +
    "<option>" + devices[4] + "</option>" +
    "<option>" + devices[5] + "</option>" +
    "</select>")
