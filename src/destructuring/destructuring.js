const data = {
	name: 'Augusto',
	surname: 'Mentz',
	age: 25,
	company: {
		title: 'Company X',
		role: 'FrontEnd developer'
	}
};
 
const { name, surname, age } = data
const { title, role } = data.company
console.log(name)
console.log(surname)
console.log(age)
console.log(title)
console.log(role)

const { role: rl } = data.company
console.log(rl);

const { city = 'Estância Velha' } = data;
console.log(city);

const array = ['Augusto', 'Mentz', 26, 'Estância Velha']

const [nameArray, surnameArray, ageArray, cityArray] = array;
console.log(nameArray)
console.log(surnameArray)
console.log(ageArray)
console.log(cityArray)
