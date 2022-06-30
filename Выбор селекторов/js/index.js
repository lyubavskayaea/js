const getDivElements = () => {
  const div = document.querySelectorAll("div");
	return div;
  // TODO: return all the div elements
};

const getFooterLinks = () => {
  const links = document.querySelectorAll("#footer-wrapper a");
	return links;
  // TODO: return all the links that are in the footer-wrapper
};

const getAboutLinks = () => {
  const links = document.querySelectorAll("a.about");
	return links;
  // TODO: return all the links that point to the About Us page
};


// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());