import { ApiError } from './apiError';
import { get } from './get';

const fetchMock = jest.fn();
global.fetch = fetchMock;

beforeEach(() => {
	fetchMock.mockReset();
});

describe('get()', () => {
	const uri = 'https://example.org/';

	test('should throw ApiError when status code is 403', () => {
		fetchMock.mockImplementationOnce(() =>
			Promise.resolve({
				status: 403,
			})
		);

		const given = get(uri);

		expect(given).rejects.toBeInstanceOf(ApiError);
		expect(given).rejects.toThrowError(
			'You have made too many requests to GitHub API. Please wait for a few moments before refreshing the page.'
		);
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(uri);
	});

	test('should throw ApiError when status code is 403', () => {
		fetchMock.mockImplementationOnce(() =>
			Promise.resolve({
				status: 500,
			})
		);

		const given = get(uri);

		expect(given).rejects.toBeInstanceOf(ApiError);
		expect(given).rejects.toThrowError('API error');
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(uri);
	});

	test('should return valid JSON response', () => {
		fetchMock.mockImplementationOnce(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve({ test: true }),
			})
		);

		expect(get(uri)).resolves.toStrictEqual({ test: true });
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(uri);
	});
});
