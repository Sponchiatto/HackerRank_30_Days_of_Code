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

// Classes são como um template para criar objetos. Ou seja, permite você ter estruturas padrões para criação de objetos.

function Person(initialAge) {
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }

  // this É uma palavra chave, tendo tanto contexto global (fora de qualquer função)
  // console.log(this.document === document); // true

  // // Em navegadores web, o objeto window é também o objeto global:
  // console.log(this === window); // true

  // Ou contexto de função, ou seja, o valor de this vai depender de como a função é chamada,
  // mas nesse caso this será o objeto global que no navegador é o window.
  // function f1() {
  //   return this;
  // }

  // // No navegador
  // f1() === window; // true

  // Em modo Estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução,
  // por padrão assumindo indefinido.

  // function f2() {
  //   "use strict"; // assume modo estrito
  //   return this;
  // }

  // f2() === undefined; // true
  // Ou seja, se this não for definido durante o contexto de execução, ele permanecerá indefinido.
  
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