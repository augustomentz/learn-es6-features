class Animal {
	constructor(kind, sound) {
		this.kind = kind;
		this.sound = sound;
	}

	hello() {
		console.log(`${this.sound} I'm a ${this.kind}!`)
	}

	static info() {
		console.log('This is a class to create Animals')
	}

	get name() {
		console.log(`${this.sound} my name is Juke!`)
	}
}

const dog = new Animal('Dog', 'Au Au')

dog.hello()
dog.name
