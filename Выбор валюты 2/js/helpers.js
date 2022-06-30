/* helpers.js */
export const getSelectedCurrencies = () => {
	return [...document.querySelectorAll(".active")].map(item => item.textContent);
	
}