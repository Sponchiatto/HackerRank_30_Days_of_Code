class Person {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = id;
  }
}

class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  calculate() {
    const averageScore =
      this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length;

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

const student = new Student("John", "Doe", 12345, [90, 85, 78, 92, 88]);
console.log(student.calculate()); // Output: 'E'
