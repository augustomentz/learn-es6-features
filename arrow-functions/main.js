const ireland = ['Dublin', 'Galway', 'Cork']

const love = ireland.map(function(name) {
	return `I Love ${name}`
})

const loveArrow = ireland.map((name) => {
	return `I Love ${name}`
})

const loveArrowSingle = ireland.map(name => {
	return `I Love ${name}`
})

const loveArrowOneLine = ireland.map(name => `I Love ${name}`)

const loveChain = ireland
	.filter(name => name === 'Dublin')
	.map(name => `I Love ${name}`)

console.log(love);
console.log(loveArrow);
console.log(loveArrowSingle);
console.log(loveArrowOneLine);
console.log(loveChain);
