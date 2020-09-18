import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export const Button: React.FunctionComponent<Props> = ({
	className,
	text = 'abcd',
	...props
}) => {
	return (
		<button {...props} className={classNames(styles.button, className)}>
			{text}
		</button>
	);
};
