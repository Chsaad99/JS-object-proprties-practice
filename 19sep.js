//this is used to  check the length of charcters
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;
// this is used to get the letter
let text1 = " I love her!";
document.getElementById("demo1").innerHTML = text1.charAt(1);
// this is used to get te ocode of character
let text2 = " she is my jan";
document.getElementById("demo2").innerHTML = text2.charCodeAt(2);
// it is simlar to charat
let text3 = " she is so pyari";
document.getElementById("demo3").innerHTML = text3.at(12);
//this is used to get the letter using array
let text4 = "I am in acadmey";
document.getElementById("demo4").innerHTML = text4[12];
//this is used to get the whole charcter
let text5 = "I hate him!";
document.getElementById("demo5").innerHTML = text5.slice(2, 6);
// if we are not given the 2nd parameter it can take from the start keyword to onward till end
let text6 = " I hate him!";
document.getElementById("demo6").innerHTML = text6.slice(2);
// slice can also be used in negative
let text7 = " I hate him!";
document.getElementById("demo7").innerHTML = text7.slice(-10);
// its not working properly
let text8 = " I hate him!";
document.getElementById("demo10").innerHTML = text7.slice(-7, -1);
let text9 = "Apple, Mango, cherry";
let text10 =" I love ";
document.getElementById("bunty").innerHTML=text10.padEnd(5, "x");

