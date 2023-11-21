// realizar testes unitários em uma função minimum_index que deve encontrar 
// o índice do elemento com o valor mínimo em um array.
function minimumIndex(seq) {
  if (seq.length === 0) {
    throw new Error(
      "Cannot get the minimum value index from an empty sequence"
    );
  }
  let minIdx = 0;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] < seq[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}

// Essa classe fornece um array vazio e espera que a função minimum_index lance 
// uma exceção quando chamada com esse array.
class TestDataEmptyArray {
    // static permite você chamar métodos diretamente sem precisar criar instâncias da classe
  static get_array() {
    return [];
  }
}

// Esta classe fornece um array com valores exclusivos (sem elementos repetidos) 
// e espera que a função minimum_index retorne o índice do valor mínimo nesse array.
class TestDataUniqueValues {
  static get_array() {
    return [1, 2, 3];
  }

  static get_expected_result() {
    return 0;
  }
}

// Esta classe fornece um array onde o valor mínimo ocorre exatamente em dois índices diferentes 
// e espera que a função minimum_index retorne o índice mais baixo desses dois valores mínimos.
class TestDataExactlyTwoDifferentMinimums {
  static get_array() {
    return [1, 1, 3];
  }

  static get_expected_result() {
    return 0;
  }
}

// testWithEmptyArray, testWithUniqueValues e testWithExactlyTwoDifferentMinimums, 
// que usam as classes de dados de teste para verificar se a função minimum_index funciona 
// conforme o esperado em cada cenário. Se os testes forem bem-sucedidos, a mensagem "OK" é impressa no console.
function testWithEmptyArray() {
  try {
    const seq = TestDataEmptyArray.get_array();
    const result = minimumIndex(seq);
  } catch (e) {
    // Error expected, do nothing
  }
}

function testWithUniqueValues() {
  const seq = TestDataUniqueValues.get_array();
  if (seq.length < 2) {
    throw new Error("Array length must be at least 2.");
  }

  const uniqueSet = new Set(seq);

//   size: Normalmente, o atributo size é usado em estruturas de dados específicas, 
//   como conjuntos (Sets) em JavaScript. Ele representa o número de elementos distintos 
//   na coleção. Em um conjunto, todos os elementos são únicos, portanto, size indica o número 
//   de elementos únicos na coleção. No contexto de um conjunto, size é uma propriedade que representa 
//   o tamanho do conjunto.

// length: O atributo length é mais comum e é usado em várias estruturas de dados, 
// como arrays. Ele representa o número total de elementos na coleção, incluindo elementos 
// repetidos, se houver. No contexto de um array, length é uma propriedade que representa o tamanho do array.

  if (uniqueSet.size !== seq.length) {
    throw new Error("Array must have all unique elements.");
  }

  const expectedResult = TestDataUniqueValues.get_expected_result();
  const result = minimumIndex(seq);
  if (result !== expectedResult) {
    throw new Error("Test case failed");
  }
}

function testWithExactlyTwoDifferentMinimums() {
  const seq = TestDataExactlyTwoDifferentMinimums.get_array();
  if (seq.length < 2) {
    throw new Error("Array length must be at least 2.");
  }

  const sortedArray = seq.slice().sort();
  if (
    sortedArray[0] !== sortedArray[1] ||
    sortedArray.length === 2 ||
    sortedArray[1] < sortedArray[2]
  ) {
    throw new Error("Array must have exactly two different minimums.");
  }

  const expectedResult =
    TestDataExactlyTwoDifferentMinimums.get_expected_result();
  const result = minimumIndex(seq);
  if (result !== expectedResult) {
    throw new Error("Test case failed");
  }
}

testWithEmptyArray();
testWithUniqueValues();
testWithExactlyTwoDifferentMinimums();
console.log("OK");

// Vantagens de usar o static:
// 1.1. Eficiência de Memória: Ao usar o static, o compilador garante que a variável seja criada 
// apenas uma vez. Isso permite que a variável seja compartilhada por todos os objetos de uma classe, 
// o que economiza memória.

// 1.2. Facilidade de Acesso: Como o static permite que a variável seja compartilhada por todos os 
// objetos de uma classe, ela pode ser acessada facilmente a partir de qualquer objeto.

// 1.3. Manutenção do Código: Se uma variável estática for alterada, todas as 
// instâncias da classe serão afetadas. Isso pode facilitar a manutenção do código, já que todas as 
// instâncias estão usando o mesmo valor.

// Desvantagens de usar o static:
// 2.1. Poluição do Namespace: O uso de variáveis estáticas pode poluir o namespace global, 
// já que todas as variáveis estáticas pertencem ao namespace da classe. Isso pode levar a confusões e 
// conflitos de nomes.

// 2.2. Dependência do Contexto de Execução: Variáveis estáticas podem criar dependências indesejadas 
// entre objetos. Se um objeto modificar o valor de uma variável estática, outros objetos também serão 
// afetados, o que pode dificultar a previsão e o gerenciamento do estado do programa.

// 2.3. Dificuldades na Testeabilidade: Como as variáveis estáticas são compartilhadas por todos 
// os objetos de uma classe, testar métodos que dependem delas pode ser complicado. É mais fácil isolar a 
// funcionalidade testada, em vez de compartilhar o estado entre diferentes testes.

// Em resumo, a decisão de usar ou não usar o static deve levar em consideração as vantagens e desvantagens 
// de cada abordagem. Em alguns casos, o uso de variáveis estáticas pode ser benéfico, principalmente 
// em situações onde o objetivo é compartilhar informações entre todos os objetos de uma classe. 
// No entanto, em outras situações, onde o estado é compartilhado entre diferentes objetos, 
// o uso de variáveis estáticas pode causar dificuldades na manutenção e no teste do código.