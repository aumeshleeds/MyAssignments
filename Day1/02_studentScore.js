/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.
2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.
3. Declare and initialize the variable
4. Call the function and print the result
*/
function calculateGrade(score) {
   switch (true) {
      case (score < 41):
         return "Grade C";
      case (score > 40 && score < 61):
         return "Grade B";
      case (score > 60 && score < 76):
         return "Grade A";
      case (score > 75 && score < 101):
         return "Grade A*";
      default:
         break;
   }
}
let gradeAchieved = calculateGrade(73)
console.log("The Grade Achieved :" + gradeAchieved)
gradeAchieved = calculateGrade(40)
console.log("The Grade Achieved :" + gradeAchieved)
gradeAchieved = calculateGrade(95)
console.log("The Grade Achieved :" + gradeAchieved)