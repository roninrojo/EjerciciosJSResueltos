/* Mínimo común múltiplo
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6. 
*/

function smallestCommons(arr) {
    // Primero ordenamos el array
    const orderArr = arr.sort((a, b) => a - b);
    const range = [];
    const commons = [];
	// Extrameos el valor inicial y final
    const [a, b] = orderArr;
	// Insertamos en un array los valores intermedios entre el inicio y el final
	for (let i = a; i <= b; i++) {
		range.push(i)
    }

    range.forEach(item => {
        for (let i = b; i > 1; i--) {
            // Si i es un divisor de a, el mcm es a * i
            if (item % i === 0) {
                commons.push(i);
            } else {
                commons.push(a * b);
        
            }
        }
    })
    
    console.log(commons);
    
    
    return;
}

console.log(smallestCommons([1, 5]));


/*
smallestCommons([1, 5]) debe devolver un número.
smallestCommons([1, 5]) debe devolver 60.
smallestCommons([5, 1]) debe devolver 60.
smallestCommons([2, 10]) debe devolver 2520.
smallestCommons([1, 13]) debe devolver 360360.
smallestCommons([23, 18]) debe devolver 6056820.
*/