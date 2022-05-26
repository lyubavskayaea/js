/* name-variations.js */

export default class NameVariations {
	/** @param {string} name */
	constructor(name) {
		this.name = name;
	  }

  getNumberOfChars() {
	  return this.name.length;
  }

  getLower() {
	  return this.name.toLowerCase();
  }

  getUpper() {
	  return this.name.toUpperCase();
  }

}
  