/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
 function getSumGrades(students) {

   return students[0].learnEnglish.grade + students[1].learnEnglish.grade
  
   
	// your code
}

// Sample usage - do not modify
let students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];
console.log(getSumGrades(students)); // 37