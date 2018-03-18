
// Fizzbuzz
var constant = {
	fizz: 'Fizz',
	buzz: 'Buzz',
};

// function fizzBuzz(num) {
	
// 	for (var i = 1; i <= num; i++) {
		
// 		// i % 3 === 0 && i % 5 === 0
// 		if (i % 15 === 0) {
// 			console.log(constant.fizz + constant.buzz);
// 		} else if (i % 3 === 0) {
// 			console.log(constant.fizz);
// 		} else if (i % 5 === 0) {
// 			console.log(constant.buzz);
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

// Recursion
function fizzBuzz(start, num) {
	debugger;
	if (start > num) {
		return;
	}

	// i % 3 === 0 && i % 5 === 0
	if (start % 15 === 0) {

		console.log(constant.fizz + constant.buzz);

		return fizzBuzz(++start, num);
	}

	if (start % 3 === 0) {
		
		console.log(constant.fizz);

		return fizzBuzz(++start, num);
	}

	if (start % 5 === 0) {

		console.log(constant.buzz);

		return fizzBuzz(++start, num);
	}

	console.log(start);
	return fizzBuzz(++start, num);
}

fizzBuzz(1, 20);
