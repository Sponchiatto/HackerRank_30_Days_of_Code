// Task
// Write a Person class with an instance variable, , and a constructor 
// that takes an integer, , as a parameter. The constructor must assign  
// to  after confirming the argument passed as  is not negative; 
// if a negative argument is passed as , the constructor should set  to  and print Age is not valid, 
// setting age to 0.. In addition, you must write the following instance methods:

// yearPasses() should increase the  instance variable by .
// amIOld() should perform the following conditional actions:
// If , print You are young..
// If  and , print You are a teenager..
// Otherwise, print You are old..

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }

  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  this.yearPasses = function () {
    // Increment the age of the person in here
    this.age++;
  };
}