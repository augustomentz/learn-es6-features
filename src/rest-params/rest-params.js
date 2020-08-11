const multiply = (mult, ...args) => {
	return args.map(arg => arg * mult)
}

console.log(multiply(22, 1, 2, 3, 4));