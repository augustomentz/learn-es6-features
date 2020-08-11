const axios = require('axios')

const posts = axios.get('https://api.github.com/users/augustomentz')

posts
	.then(response => response.data)
	.then(data => console.log(data.name))
	.catch(err => console.log(err))