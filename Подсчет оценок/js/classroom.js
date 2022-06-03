/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
   return grades.length;
  // TODO: return the number of grades
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
   let sum = 0;
   return grades.reduce((sum, grade) => sum + grade, 0);
   // TODO: return the sum of all the grades
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
   return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
   // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
   return grades.filter(grade => grade >= 10);
   // TODO: return all passing grades (10 and above)
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
   return grades.filter(grade => grade <= 9);
   // TODO: return all failing grades (9 and below)
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
   return grades.map(grade => grade + 1);
   // TODO: return all the grades raised by 1 (grades should not exceed 20)
}