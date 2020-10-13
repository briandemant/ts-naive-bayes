/// <reference types="jest" />

import { defaultTokenizer, Bayes, ngramTokenizer } from './index'

describe('defaultTokenizer', () => {
	test('remove special characters', () => {
		expect(defaultTokenizer(',.<>:"   \';\t\n !?'))
			.toEqual([])
	})
	test('keep alphanumeric characters', () => {

		expect(defaultTokenizer('the lazy fox is dead !1!!! Are you reading this?'))
			.toEqual(['the', 'lazy', 'fox', 'is', 'dead', '1', 'are', 'you', 'reading', 'this'])
	})

	test('remove unicode characters', () => {

		expect(defaultTokenizer('?a!?-b.?c-d/e\nf\tg          h i)??'))
			.toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
	})

	test('keep international characters', () => {
		expect(defaultTokenizer('æble Øl å-kan-de Én'))
			.toEqual(['æble', 'øl', 'å', 'kan', 'de', 'Én'])
	})
})
describe('ngramTokenizer', () => {
	test('remove special characters', () => {
		expect(ngramTokenizer(2)(',.<>:"   \';\t\n !?'))
			.toEqual([])
	})
	test('keep alphanumeric characters', () => {
		expect(ngramTokenizer(2)('the Bass !1!!!'))
			.toEqual(['th', 'he', 'e ', ' b', 'ba', 'as', 'ss', 's ', ' 1'])
	})

	test('remove unicode characters', () => {
		expect(ngramTokenizer(2)('?a!?-b.?c-d/e\nf\tg          h i)??'))
			.toEqual(['a ', ' b', 'b ', ' c', 'c ', ' d', 'd ', ' e', 'e ', ' f', 'f ', ' g', 'g ', ' h', 'h ', ' i'])
	})

	test('keep international characters', () => {
		expect(ngramTokenizer(2)('æble Øl å-kan-de Én'))
			.toEqual(['æb', 'bl', 'le', 'e ', ' ø', 'øl', 'l ', ' å', 'å ', ' k', 'ka', 'an', 'n ', ' d', 'de', 'e ', ' É', 'Én'])
	})


	test('respect length', () => {
		expect(ngramTokenizer(2)('en to-tre!'))
			.toEqual(['en', 'n ', ' t', 'to', 'o ', ' t', 'tr', 're'])
		expect(ngramTokenizer(3)('en to-tre!'))
			.toEqual(['en ', 'n t', ' to', 'to ', 'o t', ' tr', 'tre'])
		expect(ngramTokenizer(4)('en to-tre!'))
			.toEqual(['en t', 'n to', ' to ', 'to t', 'o tr', ' tre'])
		expect(ngramTokenizer(5)('en to-tre!'))
			.toEqual(['en to', 'n to ', ' to t', 'to tr', 'o tre'])
	})
})

describe('Bayes basic API', () => {
	test('create instance using defaults', () => {
		const bayes = new Bayes()
		expect(bayes)
			.toBeInstanceOf(Bayes)
	})
 
	test('create instance using ngram tokenizer', () => {
		const bayes = new Bayes({
			tokenizer: ngramTokenizer(5)
		})
		expect(bayes)
			.toBeInstanceOf(Bayes)
	})

	test('create instance using alt tokenizer', () => {
		const bayes = new Bayes({
			tokenizer: (text: string) => text.replace(/[^a-zA-Z0-9]/, ' ').replace(/\s+/, ' ').split(' ')
		})
		expect(bayes)
			.toBeInstanceOf(Bayes)
	})
})



