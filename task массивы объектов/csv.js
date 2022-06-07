/**
 * @param {Object[]} users
 * @param {string} users.name
 * @param {boolean} users.isVerified
 */
 const exportVerifiedUsers = users => {
   console.log(users);
    //не работает, где-то туплю   
    }


// Sample usage - do not modify
const sampleUsers = [{
    name: "Sam",
    isVerified: true
}, {
    name: "Alex",
    isVerified: false
}, {
    name: "Charlie",
    isVerified: true
}];
console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"