import { generateSearchUri, generateUserUri } from './url';

describe('generateSearchUri()', () => {
	test('should return undefined when search is empty', () => {
		expect(generateSearchUri('')).toBe(undefined);
		expect(generateSearchUri(' ')).toBe(undefined);
		expect(generateSearchUri('  ')).toBe(undefined);
	});

	test('should return uri with trimmed search term', () => {
		expect(generateSearchUri('test')).toBe('/search/test');
		expect(generateSearchUri(' test')).toBe('/search/test');
		expect(generateSearchUri('test ')).toBe('/search/test');
	});
});

describe('generateUserUri()', () => {
	test('should return valid uri', () => {
		expect(generateUserUri('gaearon')).toBe('/user/gaearon');
	});
});
