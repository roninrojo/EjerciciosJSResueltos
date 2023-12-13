/* 
Agentes binarios
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios.

*/

function binaryAgent(str) {
  // Separamos la cadena en un array por cada número binario con split
  // Por cada item del aray lo convertimos de base binaria y lo juntamos todo con split
  return str.split(' ').map((item) => String.fromCharCode(parseInt(item,2))).join('');
}

console.log(
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
);

/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") debe devolver la cadena Aren't bonfires fun!?
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") debe devolver la cadena I love FreeCodeCamp!
*/