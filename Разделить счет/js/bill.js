/* bill.js */

export default class Bill {
  constructor() {
      this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
    amountStr = Number.parseInt(amountStr, 10);
    this.amounts.push(amountStr);
    return this.amounts;
	}
	
	getCount() {
    return this.amounts.length;
  }

  getTotal() {
    return this.amounts.reduce((a, b)=> a + b)
  }

  getAverage() {
    return this.amounts.reduce((a, b)=> a + b) / this.amounts.length;
  }
}