function fizzBuzz() {  
	// Your code here
	let numero = 1;
	while (numero <= 100) {
		if ((numero % 3) === 0 && (numero % 5) === 0) {
			console.log("FizzBuzz");
		} else if ((numero % 3) === 0) {
			console.log("Fizz");
		}
		else if ((numero % 5) === 0) {
			console.log("Buzz");
		} else {
			console.log(numero);
		}
		numero++;
	}
}

fizzBuzz();