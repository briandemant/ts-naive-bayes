type Tokenizer = (text: string) => string[]

export type Options = {
	tokenizer?: Tokenizer
}

export type Result = {
	category: string
	score: number
}

const VALID_CHARACTERS = /[^0-9A-Za-z\u00C0-\u017FÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöü¡¿çÇßØøÅåÆæÞþÐð]/g

export const defaultTokenizer = (text: string) => {
	const result = text
		.replace(VALID_CHARACTERS, ' ')
		.toLowerCase()
		.split(/\s+/)
		.filter((msg) => msg.length > 0)

	return result
}


export const ngramTokenizer = (length: number) => (text: string) => {
	const stripped = text
		.replace(VALID_CHARACTERS, ' ')
		.toLowerCase()
		.trim()
		.split('')


	const result = []

	for (let i = 0; i < stripped.length - (length - 1); i++) {
		const subNgram = []

		for (let j = 0; j < length; j++) {
			subNgram.push(stripped[i + j])
		}

		const item = subNgram.join('')
		if (item.trim().length > 0) {
			result.push(item)
		}
	}

	return result
}


export class Bayes {
	private tokenizer: Tokenizer

	constructor(option: Options = {}) {
		if (option.tokenizer) {
			this.tokenizer = option.tokenizer
		} else {

			this.tokenizer = defaultTokenizer
		}
	}

	learn(text: string, category: string) {
	}

	categorize(text: string): Result {
		return {
			category: 'qwe',
			score: 1.0
		}
	}
}
