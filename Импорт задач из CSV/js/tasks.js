/* tasks.js */

export default class Tasks {
  constructor() {
    this.tasks = [];
  }

  /** @param {string} csvString */
  
  importCsv(csvString) {
    this.tasks = csvString.split(', ');
    return this.tasks;
  }



  getCount() {
    return this.tasks.length;
  }

  getFirst() {
    return this.tasks[0];
  }

  getLast() {
    return this.tasks[-1];
  }

  getUnformattedTasks() {
    return this.tasks.join(`, `).toLowerCase()
  }

}