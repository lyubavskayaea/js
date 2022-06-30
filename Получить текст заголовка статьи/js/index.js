const getArticleHeadline = () => {
	const headline = document.querySelector("#headline");
	return headline.textContent;
}

// Sample usage - do not modify
console.log(getArticleHeadline()); // "First human lands on Mars!"