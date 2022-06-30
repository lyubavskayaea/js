/**
 * @param {string} name
 */
 const setWelcomeMessage = name => {
	 const welcome = document.querySelector('strong').innerHTML
	return 'Hello ${welcome} '    
}

// Sample usage - do not modify
setWelcomeMessage("Sam");