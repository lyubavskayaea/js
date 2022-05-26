/* passport.js */

export default class Passport {
	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 */

	 constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;

	  }
	  

	  getFirstName(){	
		return this.firstName.toLowerCase();
	  }

	  getLastName() {
		return this.lastName.toUpperCase();
	  }

	  getFullName() {
		return `${this.firstName} ${this.lastName}`;
	  }

	  getInitials() {
		return this.firstName[0]+ ". " + this.lastName[0] + ". ";
	  }

	  getIsValidName() {
		let re = /^[A-ZА-ЯЁ]+$/i;
		if (this.lastName.endsWith( '.' )) {
			return "No";
		  } else if (this.lastName.match(re)) {
			return "Yes";
		  } else if (this.firstName.match(re)) {
			return "Yes";
		  } else return "No";
		
		}
	  
  }