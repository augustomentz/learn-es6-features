// Class
function Animal(kind, sound){
	// Constructor
	this.kind = kind;
	this.sound = sound;
}

Animal.prototype.hello = function() {
	console.log(`${this.sound} I'm a ${this.kind}!`)
}

const dog = new Animal('dog', 'au au')
const cat = new Animal('cat', 'meow')

console.log(dog);
console.log(cat);