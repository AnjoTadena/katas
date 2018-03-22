
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

function isPalindrome(sentence) {

	var allowedCharacter = 'abcdefghijklmnopqrstuvwxyz';

	// Set sentence to lowercase to avoid any issue for comparing characters
	var sentenceArr = sentence.toLowerCase().split('');

	// Holds the allowed characters
	var lettersArr = [];

	sentenceArr.forEach(function (char) {
		// Check if char is allowed
		if (allowedCharacter.indexOf(char) > -1) {
			lettersArr.push(char);
		}
	});

	// Take the letters and join === take the letters reverce and join
	return lettersArr.join() === lettersArr.reverse().join();
} 

function caesarCipher(str, num) {

	var strLowerString = str.toLowerCase();

	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	var newString = '';
	
	num %= alphabet.length; 

	for (var i = 0; i < strLowerString.length; i++) {

		var currentChar = strLowerString[i];

		if (currentChar === ' ') { // Character is a space

			newString += currentChar;

			continue;
		}

		// Get currenct character position from alphabet array
		var currentIndex = alphabet.indexOf(currentChar);

		var newIndex = currentIndex + num; //

		if (newIndex > (alphabet.length - 1)) {
			newIndex -= alphabet.length;
		}

		if (newIndex < 0) {
			newIndex = alphabet.length + newIndex;
		}

		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} else {
			newString += alphabet[newIndex];
		}
	}

	return newString;
}

// Simple approach
function reverseWord(word) {
	var wordArray = word.split(' ');
	var wordReverse = '';
	var wordLength = wordArray.length - 1;

	for (var i = 0; i < wordArray.length; i++) {
		var word = '';

		for (var j = wordArray[i].length - 1; j >= 0; j--) {
			word += wordArray[i][j];
		}

		wordReverse += word;

		if (i != wordLength) {
			wordReverse	+= ' ';		
		}
	}

	return wordReverse;
}

function anotherReverseWord(word) {
	var wordsArray = word.split(' ');
	var reverseWords = [];

	wordsArray.forEach(function (word) {
		var reverseWord = '';

		for (var i = word.length - 1; i >= 0; i--) {
			reverseWord += word[i];
		}

		reverseWords.push(reverseWord);
	});

	return reverseWords.join(' ');
}

// 1, 2, 3, 4, 5, 6, 7
// 7, 
function reverseArrayInPlace(arr = []) {

	for (var i = 0; i < (arr.length / 2); i++) {
		
		var tempValue = arr[i];

		arr[i] = arr[arr.length - 1 - i];

		arr[arr.length - 1 - i] = tempValue;
	}

	return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));

var t0 = performance.now();
reverseWord('anjo tadena');
var t1 = performance.now();
console.log("Call to reverseWord took " + (t1 - t0) + " milliseconds.")

var t2 = performance.now();
anotherReverseWord('anjo tadena');
var t3 = performance.now();
console.log("Call to anotherReverseWord took " + (t3 - t2) + " milliseconds.")

// Fizzbuzz
//fizzBuzz(1, 20);

// Ransom note
console.log('harmlessRansomNote', harmlessRansomNote('this is the text', 'this is the text of the note'));
console.log('isPalindrome', isPalindrome('Madam I\'m Adam'));
console.log(caesarCipher('Anjo Arinto Tadena', 233));