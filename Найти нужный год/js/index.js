/**
 * @param {number[]} years
 * @param {number} searchYear
 */
 const getYear = (years, searchYear) => {
	if (years.includes(searchYear, 0)) 
	return searchYear
	
}


// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
