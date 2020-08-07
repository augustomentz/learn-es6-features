const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

const green = (template, ...values) => {
	return template.reduce((acc, part, i) => {
		return `
			${acc}
			<span class="green">${values[i - 1].toUpperCase()}</span>
			${part}
		`
	})
}

const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;

document.body.innerHTML = ireland;