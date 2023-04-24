/*
Spinal case
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
Ej:
spinalCase("thisIsSpinalTap") debe devolver la cadena this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") debe devolver la cadena the-andy-griffith-show.
spinalCase("AllThe-small Things") debe devolver la cadena all-the-small-things.
*/

function spinalCase(str) {

  // Definimos un patron que identifica espacios y undersocres
  // https://cheatography.com/davechild/cheat-sheets/regular-expressions/
  let regex = /\s+|_+/g;
  
  // El patron busca cualquier minuscula seguida de una mayúscula y usamos un patron de reemplazo: reemplazamos el grupo 1 ([a-z]) por $1 y el grupo 2 por $2 y ponemos un espacio en medio
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // finalmente reemplazamos el prtrón definido al principio por guiones y convertimos todo a minúsculas
  return str.replace(regex, "-").toLowerCase();

  // Extra:
  // Online result
  // Hacemos split (devuelve un array) usando como separador cualquier espacio, guión bajo o cualquier cosa seguida de una mayúscula, lo mediante join lo juntamos con guiones y lo convertimos en minúsculas
  // return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();

}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));