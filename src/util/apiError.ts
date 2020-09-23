export class ApiError extends Error {
	private code: number;

	constructor(code: number, message: string) {
		super(message);

		this.code = code;
		this.name = 'ApiError';
	}
}
