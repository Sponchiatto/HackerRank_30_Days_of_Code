// LinkedList is the dynamic data structure, as we can add or remove elements at ease,
// and it can even grow as needed. Just like arrays, linked lists store elements sequentially,
// but don’t store the elements contiguously like an array.

// User defined class node
class Node {
  // constructor
  constructor(data) {
    // Element hols the data of a node, while next holds the pointer to the next node.
    this.data = data;
    this.next = null;
  }
}

function insert(head, data) {
  const newNode = new Node(data);

  if (head === null) {
    // If the linked list is empty, set the new node as the head.
    console.log(newNode);
    return newNode;
  }

  let current = head;

  // Traverse to the end of the linked list.
  while (current.next !== null) {
    current = current.next;
  }

  // Set the next pointer of the last node to the new node.
  current.next = newNode;
  console.log(head);
  return head; // Return the reference to the head of the linked list.
}

// linkedlist class
// class LinkedList {
//     constructor()
//     {
//         // head stores the first node of a List, and size indicates the number of nodes in a list
//         this.head = null;
//         this.size = 0;
//     }

// functions to be implemented
// add(element)
// insertAt(element, location)
// removeFrom(location)
// removeElement(element)

// Helper Methods
// isEmpty
// size_Of_List
// PrintList
// }

let head = null; // Initialize an empty linked list

// Insert nodes into the linked list
head = insert(head, 1);
head = insert(head, 2);
head = insert(head, 3);
