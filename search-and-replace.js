/* Busca y reemplaza

Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.
El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.
El segundo argumento es la palabra que se reemplazará (before).
El tercer argumento es lo que reemplazará el segundo argumento (after).

Nota: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
*/

function myReplace(str, before, after) {
  // Compruebo que la primera letra de before es mayúscula o no, si lo es devuelvo after con la primera letra en mayúscula, sino devuelvo after con la primera letra en minúscula.
  return (before.charAt(0) === before.charAt(0).toUpperCase())
  ? str.replace(before, after.charAt(0).toUpperCase()+after.slice(1))
  : str.replace(before, after.charAt(0).toLowerCase()+after.slice(1))
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

/*
myReplace("Let us go to the store", "store", "mall") debe devolver la cadena Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") debe devolver la cadena He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") debe devolver la cadena I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") debe devolver la cadena This has a spelling error.
myReplace("His name is Tom", "Tom", "john") debe devolver la cadena His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") debe devolver la cadena Let us get back to more Algorithms.
*/