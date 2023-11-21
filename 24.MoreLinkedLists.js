class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDuplicates(head) {
  if (!head) {
    return head;
  }

  let current = head;
  while (current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(3);

const updatedHead = removeDuplicates(head);

// 1 -> 1 -> 2 -> 2 -> 3

// Inicialmente, head aponta para o primeiro nó (valor 1).

// Começamos a iterar pela lista:

// current aponta para o primeiro nó (valor 1).
// current.next aponta para o segundo nó (valor 1).
// Verificamos se current.data é igual a current.next.data. Nesse caso, 1 é igual a 1.

// Como são iguais, removemos o nó seguinte, atualizando current.next para apontar para o nó 2.

// A lista agora se parece com isso:

// 1 -> 2 -> 2 -> 3

// Continuamos a iteração:

// current agora aponta para o nó com valor 1.
// current.next aponta para o nó com valor 2.
// Novamente, verificamos se current.data é igual a current.next.data. Nesse caso, 1 não é igual a 2.

// Não sendo iguais, movemos current para o próximo nó:

// current agora aponta para o nó com valor 2.
// current.next aponta para o nó com valor 2.
// Verificamos novamente a igualdade de current.data e current.next.data. Como 2 é igual a 2, removemos o nó seguinte, atualizando current.next para apontar para o nó 3.

// A lista agora se parece com isso:

// 1 -> 2 -> 3

// Continuamos a iteração:

// current aponta para o nó com valor 2.
// current.next aponta para o nó com valor 3.
// Verificamos se current.data é igual a current.next.data. Nesse caso, 2 não é igual a 3.

// Não sendo iguais, movemos current para o próximo nó:

// current agora aponta para o nó com valor 3.
// current.next é nulo (indicando o final da lista).
// Como current.next é nulo, a iteração termina.

// Após a remoção das duplicatas, a lista encadeada final será:

// 1 -> 2 -> 3

