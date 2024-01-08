
console.time()
const quickSort = (items) => {
	const length = items.length

	if( length < 1) return items;
	const firstItem = items[0];
	const greater = [];
	const lesser = [];

	for(let c = 1; c < length; c++) {
		if( items[c] > firstItem ) {
			greater.push(items[c])
		}else{
			lesser.push(items[c])
		}
	}

	return [...quickSort(lesser), firstItem, ...quickSort(greater)]
}

const items = [8, 9, 45, 7, 2 ,0 ,4 ,12, 29, 54, 63]
console.log( quickSort(items) )
console.timeEnd()
