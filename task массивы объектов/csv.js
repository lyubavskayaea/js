/**
 * @param {Object[]} users
 * @param {string} users.name
 * @param {boolean} users.isVerified
 */
 const exportVerifiedUsers = users => {
    let name = []
    users.forEach(user => {
    user.isVerified ? name.push(`${user.name}`) : ""})
    return name.join(", "); 
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