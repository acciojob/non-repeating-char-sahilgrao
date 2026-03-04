function firstNonRepeatedChar(str) {
 // Write your code here
	 // Edge case: empty string
    if (!str || str.length === 0) {
        return null;
    }

    // Step 1: Create an object to store character frequencies
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Step 2: Find the first character with frequency = 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 3: If none found
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
