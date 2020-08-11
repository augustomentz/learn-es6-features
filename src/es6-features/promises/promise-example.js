const axios = require('axios')

const githubUser = axios.get('https://api.github.com/users/augustomentz')

githubUser
	.then(response => response.data)
	.then(data => console.log(data.name))
	.catch(err => console.log(err))
