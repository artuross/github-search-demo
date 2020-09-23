import React, { VoidFunctionComponent } from 'react';
import { ApiError } from '../util/apiError';

interface Props {
	error?: ApiError | Error | null;
}

export const ErrorMessage: VoidFunctionComponent<Props> = ({ error }) => {
	if (!error) {
		return null;
	}

	if (error instanceof ApiError) {
		return <div>{error.message}</div>;
	}

	// here display fancy error message,
	// we could provide some additional details
	// taken from error, but this should be enough
	return <div>Unexpected error occurred, please try again later.</div>;
};
