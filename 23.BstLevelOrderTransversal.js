// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {
    if (!root) {
      return; // Handle the case of an empty tree.
    }

    const queue = []; // Initialize a queue for BFS.
    queue.push(root); // Enqueue the root node.

    while (queue.length > 0) {
      const current = queue.shift(); // Dequeue the current node.
      process.stdout.write(current.data + " "); // Print the node data with a space.

      // Enqueue left and right children if they exist.
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }; // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function (data) {
  _input += data;
});

process.stdin.on("end", function () {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});
