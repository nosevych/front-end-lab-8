var a = parseFloat(prompt("a" , ""));
var b = parseFloat(prompt("b" , ""));
var c = parseFloat(prompt("c" , ""));

var p = (a + b + c) / 2;
var res = Math.sqrt(p * (p - a) * (p - b) * (p - c));
var type;

if ( a * a + b * b == c * c || a * a + c * c == b * b || c * c + b * b == a * a) {
  type = "correct";
} 
else if (a == b && b == c) {
  type = "equilateral";
} 
else if (a == b || a == c || b == c){
  type = "isosceles";
} 
else if (a !== b && a !== c && b !== c) {
  type = "scalene";
}  

if (a <= 0 || b <= 0 || c <= 0 || res <= 0 || isNaN(res)) {
  console.log("Incorrect data!!!");
} 
else {
  console.log("Triangle is " + type + ", square is " + res.toFixed(2));
}