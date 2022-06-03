/**
 * @param {string} text
 */
 const getUnit = text => {
	 if(text.includes("°F", 0))
	 return "Fahrenheit";
	 else if (text.includes("°C", 0))
	 return "Celsius";
	 else 
	 return "N/A";
	// your code    
}

// Sample usage - do not modify
console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
console.log(getUnit("Why is it 20°C")); // Celsius
console.log(getUnit("It is expected to be cold.")); // N/A