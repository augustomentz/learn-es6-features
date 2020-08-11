// ITERATORS

// ITERABLE

const text = 'Brazil' // Iterable
const it = text[Symbol.iterator]() // Iterator

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (letter of text) {
	console.log(letter)
	if (letter === 'a') break;
}