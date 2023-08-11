/*
Programación de algoritmos intermedios
Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.
Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.

sumPrimes(10) debe devolver un número.
sumPrimes(10) debe devolver 17.
sumPrimes(977) debe devolver 73156.
*/

function sumPrimes(numero) {
	const min = 0;
	const max = numero;
	const primos = [];
	const criba = new Array(max + 1).fill(true);

	// Simplemente busque por el algoritmo de criba para saber numeros primos en un rango. 
	// Lo copie 🤷‍♂️ (a veces uno no lo sabe todo y se aprende viendo las soluciones de otros), luego simplemente use el reduce para sumarlos
	for (let num = 2; num <= Math.sqrt(max); num++) {
		if (criba[num]) {
			for (let multiple = num * num; multiple <= max; multiple += num) {
				criba[multiple] = false;
			}
		}
	}

	for (let i = Math.max(2, min); i <= max; i++) {
		if (criba[i]) {
			primos.push(i);
		}
	}
	
	return primos.reduce((acc,item) => acc+ item);
}

console.log(sumPrimes(10));