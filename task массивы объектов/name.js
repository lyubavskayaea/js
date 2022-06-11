/**
 * @param {Object[]} users
 * @param {number} users.id
 * @param {string} users.firstName
 * @param {string} users.lastName
 */
 const logNames = users => {
    //return `logs: "${users[0].firstName} ${users[0].lastName}" and "${users[1].firstName} ${users[1].lastName}"`
    return users.map(function (user) {

      return `${user.firstName} ${user.lastName}`

  }).join(" and ")
}

// Sample usage - do not modify
const sampleUsers = [{
  id: 1,
  firstName: "Sam",
  lastName: "Green"
}, {
  id: 2,
  firstName: "Alex",
  lastName: "Blue"
}];

console.log(logNames(sampleUsers)); // logs: "Sam Green" and "Alex Blue"