function isPrime(n) {
    var prime = n ^ 0
	if ( prime == n ) {
		return true
	} else {
		return false;
	}
}
console.log(isPrime(8)); /* true */
console.log(isPrime(8.2)); /* false */