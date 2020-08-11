let firtName = 'Willian'
let surname = 'Mentz'
let age = 26

// ES5
// const person = {
// 	firstName: firstName,
// 	surname: surname,
// 	age: age
// }

//ES6 
const person = {
	firstName,
	surname,
	age,
	hello() {
		console.log('Hello!')
	}
}

console.log(person)
person.hello()