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

// Classes are like a template for creating objects. In other words, it allows you to have standard structures for creating objects.

// this is a keyword, having both global context (outside of any function)
  // console.log(this.document === document); // true

  // // In web browsers, the window object is also the global object:
  // console.log(this === window); // true

  // Or function context, that is, the value of this will depend on how the function is called,
  // but in this case this will be the global object which in the browser is window.
  // function f1() {
  // return this;
  // }

  // // In browser
  // f1() === window; // true

  // In Strict mode, the value of this remains whatever is defined when entering the execution context,
  // by default assuming undefined.

  // function f2() {
  // "use strict"; // assume strict mode
  // return this;
  // }

  // f2() === undefined; // true
  // That is, if this is not defined during the execution context, it will remain undefined.

function Person(initialAge) {
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


// Creating a new Person instance with an initial age of 15
let person = new Person(17);

// Checking the starting age using the amIOld method
person.amIOld(); // Deve imprimir "You are a teenager."

// Increasing age by one year
person.yearPasses();

// Checking age after increment
person.amIOld(); // Deve imprimir a categoria correta com base na nova idade
