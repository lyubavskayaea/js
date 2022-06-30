/* helpers.js */
export const getSelectedCurrency = () => {
	const activeCard = document.querySelector('.active');
	return activeCard.textContent; 
};