function processData(input) {
  // Divide a entrada em linhas utilizando quebras de linha \n
  input = input.split("\n");
  // Criação de uma matriz para armazenar os número de telefone
  var phoneBook = [];

  //Loop que se inicia da segunda até a quantidade de consultas informada na primeira linha do input
  for (i = 1; i <= parseInt(input[0]); i++) {
    // Divide cada linha em um array usando o espaço como separador
    var contactArray = input[i].split(" ");

    //Armaza o número de telefone associando o nome como chave e o número como valor
    phoneBook[contactArray[0]] = contactArray[1];
  }

  // Verifica se o nome fornecido na consulta existe no phoneBook e imprime o número de telefone correspondente
  // ou "Not found" caso contrário.
  for (i = parseInt(input[0]) + 1; i < input.length; i++) {
    if (phoneBook[input[i]]) {
      // Se existir, ele imprime o nome e o número de telefone correspondente
      console.log(input[i] + "=" + phoneBook[input[i]]);
    } else {
      // Se não existir ele imprime "Not Found"
      console.log("Not found");
    }
  }
}

// O uso de ` ` (template literals) permite que você crie strings de várias linhas, tornando mais fácil 
//  incluir quebras de linhas e manter uma formatação legível.
const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

processData(input);
