const mySet = new Set(['Augusto', 'Bruno', 'Guilherme'])

mySet.add('Tiago')
mySet.delete('Guilherme')

console.log(mySet.has('Bruno'));
console.log(mySet);

let it = mySet.values();

for (name of it) {
	console.log(name);
}