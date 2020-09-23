export class ApiError extends Error {
	private code: number;

	constructor(code: number, message: string) {
		super(message);

		this.code = code;
		this.name = 'ApiError';
	}
}

export const handleApiResponseError = (response: Response): void => {
	if (response.status === 200) {
		return;
	}

	if (response.status === 403) {
		throw new ApiError(
			401,
			'You have made too many requests to GitHub API. Please wait for a few moments before refreshing the page.'
		);
	}
};

export const get = async <T extends any>(uri: string): Promise<T | never> => {
	const response = await fetch(uri);

	if (response.status === 403) {
		throw new ApiError(
			403,
			'You have made too many requests to GitHub API. Please wait for a few moments before refreshing the page.'
		);
	}

	// here we could handle any other "global" error
	// such as authorization, or rate limiting as in below
	// i'm not interested in the details here, so just throw an exception
	if (response.status !== 200) {
		throw new ApiError(response.status, 'API error');
	}

	const body: T = await response.json();
	return body;
};
