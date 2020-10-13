export type Options = {
	tokenizer?: (text: string) => string[]
}

export type Result = {
	category: string
	score: number
}

export const defaultTokenizer = (text: string) => {
	const result = text
		.replace(/[^0-9A-Za-z\u00C0-\u017FÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöü¡¿çÇßØøÅåÆæÞþÐð]/g, ' ')
		.toLowerCase()
		.split(/\s+/)
		.filter((msg) => msg.length > 0)

	return result
}

export class Bayes {
	private tokenizer: (text: string) => string[]

	constructor(option: Options) {
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
