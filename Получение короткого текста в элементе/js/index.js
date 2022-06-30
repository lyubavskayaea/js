const getShortTextParagraphs = () => {
	return [...document.querySelectorAll("p")].filter(p => p.textContent.length < 10)

}

// Sample usage - do not modify
console.log(getShortTextParagraphs());