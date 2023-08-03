/*
Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.
Los dos primeros números de la sucesión de Fibonacci son el 0 y el 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los siete primeros números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.
Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.
*/

function sumFibs(num) {
    let i = 0
    let fibNums = []

    
    for (i; i <= num; i++) {
        // Los dos primeros números de la serie los coloco directamente en el array
        if (i === 0 || i === 1) fibNums.push(i);
        else {
            // Hago slice de los dos ultimos items del array, con reduce los sumo
            fibNums.push(fibNums.slice(-2).reduce((acc, item) => acc + item))
           
            // Si la suma del último item es mayor que num lo saco del array y paro el bucle
            if (fibNums.slice(-1) > num) {
                fibNums.pop()
                break;
            }
        }
    }

    // Finalmente filtro los items que son impares y los vuelvo a sumar con reduce
    fibNums = fibNums.filter(item => item % 2 !== 0).reduce((acc, item) => acc + item)
    
    /* Sin reduce
    for (i; i <= num; i++) {
        // Los dos primeros números de la serie los coloco directamente en el array
        if (i === 0 || i === 1) fibNums.push(i);

        // Sumo el penultimo y ultimo item del array y lo agrego al array
        else {
            fibNums.push(fibNums[i - 2] + fibNums[i - 1])
        }
    } // en for
    
    let sum = 0;
    // Recorro el array de fibonacci con la condición de que cata item sea menor que num e impar, si lo cumple lo agrego a una suma acumulativa
    for (let i = 0; i < fibNums.length; i++) {
        if (fibNums[i] <= num && fibNums[i] % 2 != 0) {
            sum += fibNums[i]
        }
    }
    return sum;
    */
    
    return fibNums;
}

console.log(sumFibs(75025));

/* 
sumFibs(1) debe devolver un número.
sumFibs(1000) debe devolver 1785.
sumFibs(4000000) debe devolver 4613732.
sumFibs(4) debe devolver 5.
sumFibs(75024) debe devolver 60696.
sumFibs(75025) debe devolver 135721.
*/