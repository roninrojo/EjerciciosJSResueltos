/* 
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.
**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden.
*/

function diffArray(arr1, arr2) {
    /* 
    Para saber qué números coinciden entre dos arrays en JavaScript, utilizamos el método `filter()` en combinación con el método `includes()`. El método `filter()` permite crear un nuevo array con todos los elementos que cumplan una condición determinada, mientras que el método `includes()` comprueba si un elemento está presente en un array. Si queremos saber lo contrario, los elementos que están presentres en arra1 pero no en array2 solo tenemos que negar la condición. Luego repetimos con array2. Finalmente devolvemos los dos arrays combinados con spread operator.
    */
    const diff1 = arr1.filter(item => !arr2.includes(item));
    const diff2 = arr2.filter(item => !arr1.includes(item));
    return [...diff1, ...diff2]
}

console.log(diffArray([1, 2, 3, 5, 6, 7, 8], [1, 2, 3, 4, 5, 8]));

