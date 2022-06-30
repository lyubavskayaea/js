/**
 * @param {string} cssSelector
 */
 const getTextFromSelector = cssSelector => {
	const title = document.querySelector('h1');
	return title.textContent;
	// your code
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined