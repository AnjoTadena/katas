
// Constants
var constant = {
	// FizzBuzz
	fizz: 'Fizz',
	buzz: 'Buzz',
};

/**
 * [fizzBuzz description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function fizzBuzz(num) {

	for (var i = 1; i <= num; i++) {
		
		// i % 3 === 0 && i % 5 === 0
		if (i % 15 === 0) {
			console.log(constant.fizz + constant.buzz);
		} else if (i % 3 === 0) {
			console.log(constant.fizz);
		} else if (i % 5 === 0) {
			console.log(constant.buzz);
		} else {
			console.log(i);
		}
	}
}

// Fizzbuzz
fizzBuzz(1, 20);
