/**
 * @param {Object[]} users
 * @param {string} users.joined_on
 * @param {number} users.age
 */
 const getAverageAge = users => {
	return users.reduce((total, current) => total + current.age / users.length, 0);
};

// Sample usage - do not modify
const users = [{
  joined_on: "2018-12-13",
  age: 14
}, {
  joined_on: "2018-12-15",
  age: 18
}];

console.log(getAverageAge(users)); // 16