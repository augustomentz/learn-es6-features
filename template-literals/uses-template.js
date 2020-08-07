const ireland = {
	live: 'Dublin',
	love: 'Galway'
}

const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love + '!'
const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`

console.log(text);
console.log(newText);

const fruits = 'banana'
									+ '\n'
									+ 'orange'
									+ '\n'
									+ 'apple'

const newFruits =
`banana
orange
apple`;

console.log(fruits);
console.log(newFruits);