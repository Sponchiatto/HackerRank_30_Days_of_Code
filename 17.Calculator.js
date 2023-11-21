// Classes são usadas para criar objetos com métodos e propriedades.
class Calculator {
  // Método power
  power(n, p) {
    if (n < 0 || p < 0) {
      throw "n and p should be non-negative";
    } else {
      return Math.pow(n, p);
    }
  }
}

// Exemplo de uso:
// A palavra new é usada para criar uma instância de uma classe. 
const calc = new Calculator();

// É o mesmo que tentar, se der certo realiza o método power. Se não der certo imprima mensagem de erro.
try {
  const result = calc.power(2, 3);
  console.log(result); // Deve imprimir 8
} catch (error) {
  console.error(error.message); // Se um erro for lançado, imprime a mensagem de erro
}

// Classes:
// Using classes is more appropriate when you want to create objects with related methods and properties.
// In this case, the Calculator class is created to encapsulate the power calculation functionality.

// This allows you to create multiple instances of the Calculator class, each maintaining its own state (if necessary)
// being able to call the 'power' method on them.

// Classes are best suited when you have more complex functionality that involves multiple functions or methods
// related.

// Function:
// If you need to maintain the state and property of an object and only need a function to calculate powers
// you can simply create a function.
// function power(n, p) {
// if (n < 0 || p < 0) {
// throw "n and p should be non-negative";
// } else {
// return Math.pow(n, p);
// }
// }

// In other words, it will depend on your project. If you need objects with state and associated properties,
// class is more suitable. If you need simple functionality, a function might be more straightforward.

// Properties: Properties are the specific characteristics of an object that define it.
// They represent the data associated with this object. For example, if we are dealing with an object
// "Car", its properties may include the make, model, color, current speed, and so on.
// Properties describe what an object is and contain information about it.

// State: The "state" of an object is the current set of values ​​in its properties at a given time.
// In other words, the state is an instantaneous representation of the information contained in the object's properties
// at a specific point in time. When you change an object's properties, its state changes. Therefore,
// state is a way of describing what the object "is" at this moment.

// In short, properties are the specific information contained in an object, and state is the representation
// of this information at a given time. The relationship is that the state of an object is determined by the
// properties of this object. As properties change, the state of the object also changes. Therefore, these
// terms are related and often used together when discussing objects in object-oriented programming
// objects.