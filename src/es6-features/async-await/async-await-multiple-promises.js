const axios = require('axios')

const getGithubUsers = async (users) => {
	try {
		const promises = users.map(user => axios.get(`https://api.github.com/users/${user}`))

		const people = await Promise.all(promises)
	
		people.map(p => console.log(p.data.name))
	} catch (e) {
		console.log(e);
	}
}

getGithubUsers(['augustomentz', 'bruno-azzi'])