const obj = {
	name: 'Augusto',
	age: 21
}

const proxy = new Proxy(obj, {
	get(target, name) {
		console.log('Alguém está pedindo nome')

		return target[name]
	},
	set(target, name, value) {
		console.log('Alguém está alterando o nome')

		target[name] = value.toUpperCase()
	}
})

console.log(obj);
console.log(proxy);
console.log(proxy.name);

proxy.name = 'Novo nome'

console.log(proxy.name);
console.log(obj.name);