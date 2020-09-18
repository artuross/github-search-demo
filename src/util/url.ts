export const generateSearchUri = (search: string): string | undefined => {
	if (search.trim() === '') {
		return undefined;
	}

	const term = search.trim();

	return `/search/${term}`;
};
