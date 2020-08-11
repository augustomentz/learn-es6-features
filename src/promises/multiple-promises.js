const currency = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ currency: 'euro', value: 3.50 });
	}, 5000);
});

const countries = new Promise((resolve, reject) => {
	resolve(['Ireland', 'England', 'Scotland']);
});

// Promise
// 	.all([currency, countries])
// 	.then((res => console.log(res)))

Promise
	.race([currency, countries])
	.then((res => console.log(res)))