let foo = Symbol('name')
let bar = Symbol('name')

let obj = {
	[Symbol('name')]: 'Willian',
	[Symbol('age')]: 26,
	city: 'Brazil'
}

const symbols = Object.getOwnPropertySymbols(obj);

const data = symbols.map(sym => obj[sym])

console.log(data);