/**
 * @param {Object[]} users
 */
 const getFullNames = users => {
	const {firstName, lastName} = users;
  return `${users[firstName]} ${users[lastName]}`;
  // не работает
}

// Sample usage - do not modify
const users = [{
  id: 1,
  firstName: "Sam",
  lastName: "Green"
}, {
  id: 2,
  firstName: "Alex",
  lastName: "Blue"
}];

console.log(getFullNames(users)); // ["SAM GREEN", "ALEX BLUE"]