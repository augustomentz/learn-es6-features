function* genNames() {
	console.log('Chamando primeiro nome!')
	yield 'Willian'
	console.log('Chamando segundo nome!')
	yield 'Augusto'
	console.log('Chamando terceiro nome!')
	yield 'Bruno'
}

const names = genNames()

console.log(names.next())
console.log(names.next())
console.log(names.next())

