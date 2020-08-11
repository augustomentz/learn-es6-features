const sum = (a, b) => {
	return a + b
}

export const sub = (a, b) => {
	return a - b
}

const mult = (a, b) => {
	return a * b
}

const div = (a, b) => {
	return a / b
}

export { mult as multiply, div }

export default sum;