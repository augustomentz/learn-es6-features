const data = [
	{
		name: 'Augusto',
		age: 21,
		city: 'Estância Velha'
	},
	{
		name: 'Bruno',
		age: 21,
		city: 'Estância Velha'
	},
	{
		name: 'Tiago',
		age: 35,
		city: 'Estância Velha'
	}
]

const sampleArray = [4, -5, 0 -1]

const underZero = sampleArray.find(x => x < 0)
const underZeroIndex = sampleArray.findIndex(x => x < 0)

console.log(underZero)
console.log(underZeroIndex)

const augusto = data.find(person => person.name === 'Augusto')
console.log(augusto)