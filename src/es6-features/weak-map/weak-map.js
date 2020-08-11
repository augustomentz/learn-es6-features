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

const wm = new WeakMap()

wm.set(obj, 'Info do Augusto');
wm.set(obj2, 'Info do Bruno');

console.log(wm);