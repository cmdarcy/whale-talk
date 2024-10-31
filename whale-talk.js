const convertToWhaleSpeak = function (inputString) {
	const normalizedInput = inputString.toLowerCase();
	const vowels = ["a", "e", "i", "o", "u"];
	let resultArray = [];
	for (let index = 0; index < normalizedInput.length; index++) {
		const letter = normalizedInput[index];
		letter === "e" || letter === "u" ? resultArray.push(letter) : null;
		for (let j = 0; j < vowels.length; j++) {
			const vowel = vowels[j];
			letter === vowel ? resultArray.push(letter) : null;
		}
	}
	const resultWhaleSpeak = resultArray.join("").toUpperCase();
	console.log(resultWhaleSpeak);
};

convertToWhaleSpeak("turpentine and turtles");
