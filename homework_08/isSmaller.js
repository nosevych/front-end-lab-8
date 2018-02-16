var a = prompt("Введи число А", 5);
var b = prompt("Введи число B", -5);

function isSmaller(a,b) {
	var c = a < b;
	alert(a < b);
}

console.log(isSmaller(a, b));