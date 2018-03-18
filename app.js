
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

/**
 * [harmlessRansomNote description]
 * Note: Avoid exponential runtime {O(n^2)}
 * @param  {[type]} note     [description]
 * @param  {[type]} magazine [description]
 * @return {[type]}          [description]
 */
function harmlessRansomNote(note, magazine) {
	// take {note} as an array
	var noteArr = note.split(' ');

	// take {magazine} as an array
	var magazineArr = magazine.split(' ');

	// Holds magazine hash table
	var magazineObj = {};

	// Note is enough from the magazine
	var noteIsPossible = true;

	magazineArr.forEach(function (magazineWord) {

		// word|key is note yet set ti the hash table
		if (! magazineObj[magazineWord]) {
			magazineObj[magazineWord] = 0;
		}

		magazineObj[magazineWord]++;
	});

	noteArr.forEach(function (word) {

		if (magazineObj[word]) {
			
			magazineObj[word]--;

			// magazine word is not enough
			if (magazineObj[word] < 0)	{
				noteIsPossible = false;
			}

		} else {
			noteIsPossible = false;
		}
	});

	return noteIsPossible;
} 

// Fizzbuzz
// fizzBuzz(1, 20);

// Ransom note
console.log(harmlessRansomNote('this is the text', 'this is the text of the note'));
