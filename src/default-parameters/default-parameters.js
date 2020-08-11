const hellow = (name = 'Augusto', surname = 'Mentz') => {
	console.log(`Hello ${name} ${surname}! How are you?`)
}

hellow();
hellow('Augusto')
hellow('Augusto', 'Mentz');
hellow('João', 'Anão');