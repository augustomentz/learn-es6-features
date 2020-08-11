const axios = require('axios')

const getGithubUser = async () => {
	try {
		const response = await axios.get('https://api.github.com/users/augustomentz')
	
		const { name } = response.data
	
		console.log(name);
	} catch (error) {
		console.error('We got an error', error.response.statusText)
	}
}

getGithubUser()