const obj = {
	name: 'Augusto',
	age: 21
}

const obj2 = {
	name: 'Bruno',
	age: 21
}

const obj3 = {
	name: 'Guilherme',
	age: 22
}

const ws = new WeakSet([obj, obj2])

ws.add(obj3);
ws.delete(obj2);