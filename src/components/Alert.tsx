import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import styles from './Alert.module.scss';

interface Props {
	variant: 'info';
}

export const Alert: FunctionComponent<Props> = ({ variant, children }) => {
	return (
		<div
			className={classNames({
				[styles.container]: true,
				[styles.info]: variant === 'info',
			})}
		>
			{children}
		</div>
	);
};
