// Class representing a Person
class Person {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = id;
  }
}

// Class representing a Student, inheriting from Person
class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  // Method to calculate the grade based on scores
  calculate() {
    // Calculate the average score of the student
    const averageScore =
      this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length;

    // Determine the grade based on the average score
    if (averageScore >= 90 && averageScore <= 100) {
      return "O"; // Outstanding
    } else if (averageScore >= 80 && averageScore < 90) {
      return "E"; // Excellent
    } else if (averageScore >= 70 && averageScore < 80) {
      return "A"; // Acceptable
    } else if (averageScore >= 55 && averageScore < 70) {
      return "P"; // Poor
    } else if (averageScore >= 40 && averageScore < 55) {
      return "D"; // Dreadful
    } else {
      return "T"; // Troll
    }
  }
}

// Create a new Student object with given details and scores
const student = new Student("John", "Doe", 12345, [90, 85, 78, 92, 88]);

// Calculate and print the grade for the student
console.log(student.calculate()); // Output: 'E'
