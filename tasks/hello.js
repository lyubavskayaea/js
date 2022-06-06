/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
const getGreeting = () => {
	return "user";
}

const getWelcomeMessage = user => {
	return `Welcome ${user.fullName ?? getGreeting()}`;	

}

// Sample usage - do not modify
console.log(getWelcomeMessage({fullName: "Sam Green"})); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"