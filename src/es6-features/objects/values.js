const animals = {
	camel: 3,
	llama: 2,
	alpaca: 5
}

console.log('Total of animals:', Object.values(animals).reduce((a, b) => a + b))
// const animalsMap = new Map(Object.entries(animals))

// console.log(animalsMap.size);
// console.log(animalsMap.has('alpaca'))
// console.log(animalsMap.get('alpaca'))