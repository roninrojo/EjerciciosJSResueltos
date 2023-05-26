/* Emparejamiento de ADN
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.
A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.
Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]
El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado. 
A -> T
T -> A
C -> G
G -> C
*/


function pairElement(str) {
    // Creo una variable con los pares posibles que hará de "switch"
    const pairs = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }
    // Convierto el string en un array de letras con split, y con map devuelvo un array con la letra y el par que le corresponde usando el objeto pairs como si fuera un switch. map siempre devulve un nuevo array con los resultados de cada iretaración, en este caso un array de arrays (array 2D)
    return str.split('').map(item => [item,pairs[item]])
}

console.log(pairElement("TTGAG"));

// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]