/// <reference types="jest" />

import { defaultTokenizer, Bayes } from './index'

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
