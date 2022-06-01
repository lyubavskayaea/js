/* nutrition.js */
/**
 * @param {array[][]} rows
 */
 export const renderTableRows = rows => {
	return `${rows.map(rows => `<tr><td>${rows[0]}</td><td>${rows[1]}</td></tr>`).join(" ")}`
  }