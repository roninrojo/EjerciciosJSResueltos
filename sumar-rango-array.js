function sumAll(arr) {
	const orderArr = arr.sort((a, b) =>  a - b );
	console.log(orderArr);
	const [a, b] = orderArr;
	for (i=a+1; i < b; i++) {
		arr.push(i)
	}
	const newArr = arr.sort((a, b) => a - b ).reduce((acc,num)=> acc+num);
	console.log(newArr);
	
  return 1;
}

sumAll([4, 1]);

