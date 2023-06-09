/*
Unión Ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.
En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.
Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.
Revisa las pruebas de afirmación para ver ejemplos.
*/

function uniteUnique() {
    console.log([...arguments].flat());
    
    const result = [...arguments]
        .flat()
        .filter((item, ind, arr) => {
            console.log(`${arr.indexOf(item)}-${ind}`);
            
            return arr.indexOf(item) === ind
        });
    console.log(result);
    
    // return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) debe devolver [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) debe devolver [1, 2, 3, 5, 4, 6, 7, 8].
*/