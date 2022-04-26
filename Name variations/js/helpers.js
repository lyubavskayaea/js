/** @param {string} name */
export function getNumberOfChars(name) {
    return name.length
  };
  
  
  /** @param {string} name */
  export function getLower(name) {
    return name.toLowerCase()
  };
  
  /** @param {string} name */
  export function getUpper(name) {
    return name.toUpperCase()
  };

  console.log(getNumberOfChars("alex"));
  console.log(getUpper("alex"))
  console.log(getLower("JoHNnY"))