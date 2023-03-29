/*
Sumar el rango de números entre dos números pasados por un array. No tienen porqué estar ordenados.
Ej: [2,8] -> 2+3+4+5+6+7+8 = 35
*/
function sumAll(arr) {
	// Primero ordenamos el array
	const orderArr = arr.sort((a, b) =>  a - b );
	// Extrameos el valor inicial y final
	const [a, b] = orderArr;
	// Insertamos en un array los valores intermedios entre el inicio y el final
	for (i=a+1; i < b; i++) {
		arr.push(i)
	}
	// Devolcemos la suma de los valores del array mediante la función reduce.
  	return arr.reduce((acc,num)=> acc+num);;
}

console.log(sumAll([8, 2]));

