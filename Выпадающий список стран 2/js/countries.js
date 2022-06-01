/* countries.js */

/**
 * @param {string[]} countries
 */
 export const getDropdown = countries => {
	return `
	<option value="">Please select</option>
	${countries.map(countries => `<option value="${countries.toLowerCase()}">${countries}</option>`)}
	`
}