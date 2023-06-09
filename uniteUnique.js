/*
Unión Ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.
En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.
Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.
Revisa las pruebas de afirmación para ver ejemplos.
*/

function uniteUnique() {
    // Usamos el valor ...arguments para coger todos los arrays pasados, los unificamos con flat y filtramos aquellos que coincidan con su indice. Como indexOf se queda con el primer valor donde aparecen las siguientes apariciones no coincidiran y serán false.
    // Pj indexOf(1) = 0, cuando vuelve a aparecer 1 el indice vale 9, pero su indexOf = 0, lo filtra.
    return [...arguments]
        .flat()
        .filter((item, ind, arr) => {
            // console.log(`${arr.indexOf(item)}-${ind}`); // <- para ver comparación
            return arr.indexOf(item) === ind
        });
    
    /*  Otra aproximación más clásica:

        const args = [...arguments];
        const result = [];
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < args[i].length; j++) {
                if (!result.includes(args[i][j])) {
                    result.push(args[i][j]);
                }
            }
        }
        return result;
    */
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) debe devolver [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) debe devolver [1, 2, 3, 5, 4, 6, 7, 8].
*/