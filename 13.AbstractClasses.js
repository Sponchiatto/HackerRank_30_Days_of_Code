// Define the Book class with an abstract display method
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  display() {
    // This is an abstract method to be implemented by subclasses
  }
}

// Define the MyBook class that inherits from Book
class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    // Implement the display method as required
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }
}

// Example usage:
const myBook = new MyBook("The Great Gatsby", "F. Scott Fitzgerald", 10);
myBook.display();
