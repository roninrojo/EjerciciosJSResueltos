/*
Busca y destruye
Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.
Nota: Tienes que utilizar el objeto arguments.
*/

function destroyer(arr) {
    // Extraigo los argumentos posteriores al primer argumento (arr)
    const args = [...arguments].slice(1);
    // Filtro los elementos que NO estan entre los argumentos pasados negando el resultado de includes, que devuelve un booleano.
    return arr.filter(item => !args.includes(item));

    // Extra: en una linea
    // return arr.filter(item => ![...arguments].slice(1).includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [12,92,65]