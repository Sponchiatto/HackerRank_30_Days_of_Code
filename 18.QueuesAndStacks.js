// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
// O método pop() remove o último elemento de um array e retorna aquele elemento.
// O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.

// Estrutura de pilha (stack) e fila (queue). 
// Pilha armazenar os caracteres em ordem reversa enquanto a fila mantém os caracteres originais
class Palindrome {
  constructor() {
    this.stack = [];
    this.queue = [];
  }

// Empilha (push) um caractere na pilha através do push.
  pushCharacter(char) {
    this.stack.push(char);
  }

// Este método permite enfileirar (enqueue) um caractere na fila. Também usando o push que adiciona o caractere
// no final da matriz
  enqueueCharacter(char) {
    this.queue.push(char);
  }

// Este método desempilha (pop) e retorna o caractere no topo da pilha.
// Usando o método pop de uma matriz para remover e retornar o último elemento da pilha.
  popCharacter() {
    return this.stack.pop();
  }
// Este método desenfileira (dequeue) e retorna o primeiro caractere da fila. Usando o método shift
// de uma matriz para remover e retornar o primeiro elemento da fila
  dequeueCharacter() {
    return this.queue.shift();
  }
}

function isPalindrome(s) {
  const pal = new Palindrome();

  // Itera sobre os caracteres empilhando e enfileirando os caracteres e em seguida
  // comparando-os para verem se são iguais
  for (let char of s) {
    pal.pushCharacter(char);
    pal.enqueueCharacter(char);
  }

  // Todo caractere em palíndromo são comparados da seguinte forma, o primeiro com o último
  // o segundo com o penultimo e o terceiro com o antepenúltimo e assim por diante.
  // Ou seja, apenas metade da string deve ser igual à segunda metade, mas na ordem reversa.
  // Ou seja, você compara até o meio da string, não precisa comparar os caracteres na segunda metade
  // Por isso o loop for tem como segunda condição i < s.length / 2;
  for (let i = 0; i < s.length / 2; i++) {
    if (pal.popCharacter() !== pal.dequeueCharacter()) {
      return false;
    }
  }

  return true;
}

// Outra solução:

// function Solution() {
//   // Current string
//   let stack = [];
//   // Reversed string
//   let queue = [];

//   this.pushCharacter = (char) => stack.push(char);
//   this.enqueueCharacter = (char) => queue.unshift(char);
//   this.popCharacter = () => stack.pop();
//   this.dequeueCharacter = () => queue.pop();
// }

// function main() {
//   // read the string s
//   var s = readLine();
//   var len = s.length;
//   // create the Solution class object p
//   var obj = new Solution();
//   //push/enqueue all the characters of string s to stack
//   for (var i = 0; i < len; i++) {
//     obj.pushCharacter(s.charAt(i));
//     obj.enqueueCharacter(s.charAt(i));
//   }

//   var isPalindrome = true;
//   /*
//     pop the top character from stack
//     dequeue the first character from queue
//     compare both the characters*/

//   for (var i = 0; i < len / 2; i++) {
//     if (obj.popCharacter() != obj.dequeueCharacter()) {
//       isPalindrome = false;
//       break;
//     }
//   }
//   //finally print whether string s is palindrome or not

//   if (isPalindrome) console.log("The word, " + s + ", is a palindrome.");
//   else console.log("The word, " + s + ", is not a palindrome.");
// }