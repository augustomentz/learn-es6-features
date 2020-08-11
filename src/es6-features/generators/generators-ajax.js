const axios = require('axios')

const url = 'https://api.github.com/users/augustomentz';

const ajax = (url) => {
	axios.get(url)
		.then(response => data.next(response.data))
}

// ajax(url)

function* ajaxGen() {
	console.log('Buscando dados do github...')
	const github1 = yield ajax(url);
	console.log(github1.login);

	console.log('Buscando dados do github 2...')
	const github2 = yield ajax(url);
	console.log(github2.login);
}

const data = ajaxGen();
data.next()
