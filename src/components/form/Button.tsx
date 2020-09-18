import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	to?: string;
}

export const Button: React.FunctionComponent<Props> = ({
	className,
	to,
	text,
	...props
}) => {
	const element = (
		<button {...props} className={classNames(styles.button, className)}>
			{text}
		</button>
	);

	if (!to) {
		return element;
	}

	return <Link to={to}>{element}</Link>;
};
